"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

const PageTransitionLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{}}
        variants={{
          initialState: {
            opacity: 0,
            x: 20,
          },
          animateState: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
