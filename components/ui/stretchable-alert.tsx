"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface StrechableAlertProps extends MotionProps {
  children: ReactNode;
  extend?: (isOpen: boolean) => ReactNode;
  className?: string;
  alertClassName?: string;
}

const StrechableAlert = ({ children, className, alertClassName, animate, transition, extend, ...rest }: StrechableAlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn("w-full", className)}
      onTap={() => setIsOpen((open) => !open)}
      {...rest}
      initial={{ height: "66px" }}
      animate={{ height: isOpen ? "200px" : "66px" }}
      transition={{ duration: 0.5, ease: "backInOut" }}
    >
      <Alert className={cn("text-white bg-zinc-600 ring-0 border-0 mt-4 h-full rounded-2xl", alertClassName)}>
        <AlertDescription className="flex w-full items-center ">{children}</AlertDescription>
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -5 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          {extend && extend(isOpen)}
        </motion.div>
      </Alert>
    </motion.div>
  );
};

export default StrechableAlert;
