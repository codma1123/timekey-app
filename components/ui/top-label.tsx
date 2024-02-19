"use client";

import Title from "@/components/ui/title";
import { useScroll } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Variants, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React, { HTMLProps, MouseEvent } from "react";

interface TopLabelProps {
  scrolledClassName?: string;
  scrolledColor?: string;
  titleClassName?: string;
  label?: string;
  className?: string;
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | LucideIcon;
  onClick?: (e: MouseEvent) => void;
}

const TopLabel = ({ className, label, scrolledClassName, scrolledColor, Icon, titleClassName, ...rest }: TopLabelProps) => {
  const { blocked, scrollToTop } = useScroll({ breakpoint: 20 });

  return (
    <>
      <motion.div
        className="fixed top-[-110px] w-full h-[110px] z-50"
        {...rest}
        onClick={(e) => {
          rest.onClick ? rest.onClick(e) : scrollToTop();
        }}
        transition={{ duration: 0.2 }}
        animate={{
          top: blocked ? "0px" : "-110px",
          backgroundColor: "rgb(57 51 44)",
          transition: { duration: 0.2 },
        }}
      ></motion.div>

      <Title
        title={label}
        className={cn("z-50 sticky", titleClassName)}
        animate={{
          top: blocked ? 35 : 50,
          transition: { duration: 0.2 },
        }}
      />
    </>
  );
};

export default TopLabel;
