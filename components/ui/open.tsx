import { cn } from "@/lib/utils";
import { useWorkStore } from "@/store/work";
import { motion, useAnimation } from "framer-motion";
import { Key } from "lucide-react";
import { useEffect } from "react";

const Open = () => {
  const controls = useAnimation();
  const { isWork, canWorkOff, earlyWorkOff, workOff } = useWorkStore();

  const startHighlightAnimation = async () => {
    await controls.start({
      scale: 1.4,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    await controls.start({
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    // startHighlightAnimation();
  };

  useEffect(() => {
    return () => controls.stop();
  }, []);

  return (
    <motion.div animate={controls}>
      <Key className="h-14 w-14 text-main" />
    </motion.div>
  );
};

export default Open;
