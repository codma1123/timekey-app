"use client";

import Title from "@/components/ui/title";
import { useScroll } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface TopLabelProps extends HTMLProps<HTMLDivElement> {
  scrolledClassName?: string;
  label?: string;
}

const TopLabel = ({ className, label, scrolledClassName, ...rest }: TopLabelProps) => {
  const { blocked, scrollToTop } = useScroll({ breakpoint: 20 });

  return (
    <>
      <div
        {...rest}
        onClick={(e) => {
          rest.onClick ? rest.onClick(e) : scrollToTop();
        }}
        className={cn("fixed top-[-112px] w-full h-28 z-50 transition-all duration-200 rounded-bl-xl rounded-br-xl", blocked && scrolledClassName)}
      ></div>

      <Title
        className={cn("text-zinc-200 sticky top-10 z-50 transition-all duration-150 w-full", className, blocked && "top-12 text-2xl")}
        title={label}
      />
    </>
  );
};

export default TopLabel;
