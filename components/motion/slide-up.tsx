"use client";

import React, { MouseEvent, ReactNode, useEffect, useState } from "react";
import { MotionProps, motion, useAnimation } from "framer-motion";

interface SlideUpMotionProps extends MotionProps {
  children: ReactNode;
  beforeSlideContent?: ReactNode;
  afterSlideContent?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  onClick?: (e: MouseEvent) => void;
  isActive?: boolean;
}

const SlideUpMotion = ({ children, className, delay, duration, isActive, beforeSlideContent, afterSlideContent, onClick, onPanEnd }: SlideUpMotionProps) => {
  const [isSlide, setIsSlide] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) slideActive();
    if (isActive === false) slideDeactive();
  }, [isActive]);

  useEffect(() => {
    const sildeUp = async () => {
      await controls.start({ height: 400, transition: { ease: "easeInOut", duration: duration ?? 0.5 } });
    };

    const timeoutId = setTimeout(sildeUp, delay ? delay * 1000 : 1000);

    return () => clearTimeout(timeoutId);
  }, [controls]);

  const slideActive = async () => {
    setIsSlide(true);
    await controls.start({ transition: { ease: "easeInOut", duration: duration ?? 0.5 } });
    setIsSlide(false);
  };

  const slideDeactive = async () => {
    setIsSlide(true);
    await controls.start({ height: 400, transition: { ease: "easeInOut", duration: duration ?? 0.5 } });
    setIsSlide(false);
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onClick={onClick}
      onPanEnd={onPanEnd}
      className={className}
      animate={controls}
      initial={{ height: 0 }}
    >
      {children}
      {isSlide ? <div>슬라이드</div> : <div>{isActive ? afterSlideContent : beforeSlideContent}</div>}
    </motion.div>
  );
};

export default SlideUpMotion;
