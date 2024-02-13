"use client";

import { cn } from "@/lib/utils";
import { ClockIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React, { HTMLAttributes, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | LucideIcon;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}

const Content = ({ Icon, children, className, dark, ...props }: ContentProps) => {
  const controls = useAnimation();

  const iconSizeClass = "h-4 w-4";
  const ContentIcon = () => (Icon ? <Icon className={iconSizeClass} /> : <ClockIcon className={iconSizeClass} />);

  return (
    <motion.div
      className={cn("py-8 px-9 w-full bg-content rounded-2xl text-center relative z-40 text-[14px]", className)}
      whileTap={{ scale: 0.95 }}
      animate={controls}
    >
      <div className="absolute top-4 left-4">
        <ContentIcon />
      </div>
      {children}
    </motion.div>
  );
};

export default Content;
