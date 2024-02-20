import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { motion, MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface TitleProps extends MotionProps {
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | LucideIcon;
  title: string;
  className?: string;
}

const Title = ({ Icon, title, className, ...rest }: TitleProps) => {
  return (
    <motion.div
      className={cn("py-4 text-5xl flex items-center gap-[10px] w-full font-bold", className)}
      {...rest}
    >
      {title}
      {Icon && <Icon className="h-8 w-8" />}
    </motion.div>
  );
};

export default Title;
