"use client";

import { ReactNode, useMemo } from "react";
import NavigationBottom from "@/components/ui/navigation/navigation-bottom";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import BackSwipe from "@/components/motions/back-swipe";
import { DOSIS } from "@/lib/fonts/dosis";
import { IBM_KR } from "@/lib/fonts/ibm-kr";

const MainLayout = ({ children }: { children: ReactNode; params: { userId: string } }) => {
  const path = usePathname();

  const pathBg = {
    home: "bg-primary",
    overtime: "bg-overtime",
    vacation: "bg-zinc-700",
    user: "bg-white",
  };

  const lastPath = useMemo(() => path.split("/").at(2), [path]);

  const bgColor = useMemo(() => pathBg[lastPath], [lastPath]);
  const isDarkPage = useMemo(() => lastPath === "overtime" || lastPath === "user", [bgColor]);

  return (
    <body className={cn(bgColor, DOSIS.className, IBM_KR.className)}>
      <BackSwipe>
        <main className={cn("flex flex-col items-center h-screen w-screen gap-4 transition-all duration-500 pt-16 px-6", isDarkPage && "text-white")}>{children}</main>
      </BackSwipe>
      <NavigationBottom isDarkPage={isDarkPage} />
    </body>
  );
};

export default MainLayout;
