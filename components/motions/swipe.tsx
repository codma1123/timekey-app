import { useMotionValue, useTransform, motion } from "framer-motion";
import { PointerEvent, ReactNode } from "react";

interface SwipeProps {
  onSwipe?: () => void;
  children: ReactNode;
}

const Swipe = ({ children, onSwipe }: SwipeProps) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [10, 200], [1, 0]);
  const onPointerOut = (e: PointerEvent) => {
    e.clientX > 200 && onSwipe && onSwipe();
  };

  return (
    <motion.div>
      <motion.div
        className="box"
        drag="x"
        onPointerOut={onPointerOut}
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, opacity }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Swipe;
