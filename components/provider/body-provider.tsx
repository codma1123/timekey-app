"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type RouteName = "home" | "report" | "vacation" | "user";

const pathBg: Record<RouteName, string> = {
  home: "bg-primary",
  report: "bg-overtime",
  vacation: "bg-zinc-700",
  user: "bg-white",
} as const;

const BodyProvider = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  const routeName = path.split("/").at(-1) as RouteName;

  return <body className={cn(pathBg[routeName])}>{children}</body>;
};

export default BodyProvider;
