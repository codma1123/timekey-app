"use client";

import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

interface PageTransitionProps extends MotionProps {
  children: ReactNode;
}

const PageTransition = ({ children, variants, transition }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        className="w-full"
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={transition}
        variants={
          variants || {
            initialState: {
              opacity: 0,
              x: 20,
            },
            animateState: {
              opacity: 1,
              x: 0,
              y: 0,
            },
          }
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
