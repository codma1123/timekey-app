import { AnimationProps } from "framer-motion";
import * as motion from "@/components/motions";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideDownProp {
  children: ReactNode;
  transition?: (typeof motion.div.propTypes)["transition"];
  delay?: number;
  className?: string;
}

const SlideDown = ({ children, delay, className }: SlideDownProp) => {
  const slideDownProps: AnimationProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { delay: delay ?? 0.2, duration: 0.2 },
  };

  return (
    <motion.div
      {...slideDownProps}
      transition={{}}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default SlideDown;
