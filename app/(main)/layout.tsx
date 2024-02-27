"use client";

import { ReactNode, useMemo } from "react";
import NavigationBottom from "@/components/ui/navigation/navigation-bottom";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import BackSwipe from "@/components/motions/back-swipe";
import { DOSIS } from "@/lib/fonts/dosis";
import { IBM_KR } from "@/lib/fonts/ibm-kr";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = ({ children }: { children: ReactNode; params: { userId: string } }) => {
  const path = usePathname();

  const pathBg = {
    home: "bg-primary",
    report: "bg-overtime",
    vacation: "bg-zinc-700",
    user: "bg-white",
  };

  const lastPath = useMemo(() => path.split("/").at(2), [path]);

  const bgColor = useMemo(() => pathBg[lastPath], [lastPath]);
  const isDarkPage = useMemo(() => lastPath === "report" || lastPath === "user", [bgColor]);

  return (
    <body className={cn(bgColor, DOSIS.className, IBM_KR.className)}>
      <BackSwipe>{children}</BackSwipe>
      <NavigationBottom isDarkPage={isDarkPage} />
      <Toaster />
    </body>
  );
};

export default MainLayout;
