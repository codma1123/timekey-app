"use client";

import { cn } from "@/lib/utils";
import { Haptics, HapticsImpactStyle, ImpactStyle } from "@capacitor/haptics";
import { MotionProps, motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface IntersectionMotionDivProps extends MotionProps {
  children?: ReactNode;
  className?: string;
}

const IntersectionMotionDiv = ({ children, className, initial, animate, ...rest }: IntersectionMotionDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => !isVisible && setIsVisible(entry.isIntersecting));
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={cn(className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      onTap={async () => await Haptics.impact({ style: ImpactStyle.Light })}
    >
      {children}
    </motion.div>
  );
};

export default IntersectionMotionDiv;
