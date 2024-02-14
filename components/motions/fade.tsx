"use client";

import classNames from "classnames";
import { AnimationProps, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeProp {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Fade = ({ children, className, delay }: FadeProp) => {
  const fadeProps: AnimationProps = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },

    exit: {
      opacity: 0,
    },

    transition: { delay: delay ?? 0.2, duration: 0.7 },
  };

  return (
    <motion.div
      {...fadeProps}
      className={classNames(className ?? "")}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
