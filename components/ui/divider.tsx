import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const Divider = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("bg-slate-200 h-[1px] w-full", className)}
      {...props}
    />
  );
};

export default Divider;
