"use client";

import BackSwiperWrapper from "@/app/components/BackSwiperWrapper";
import NavigationBottom from "@/components/ui/navigation/navigation-bottom";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { ReactNode, useMemo } from "react";

interface AppWrapperProp {
  children: ReactNode;
  dark?: boolean;
}

const AppWrapper = ({ children }: AppWrapperProp) => {
  const path = usePathname();

  const pathBg = {
    home: "bg-primary",
    overtime: "bg-overtime",
    vacation: "bg-slate-300",
    user: "bg-white",
  };

  const lastPath = useMemo(() => path.split("/").at(-1), [path]);

  const bgColor = useMemo(() => pathBg[lastPath], [lastPath]);
  const isDarkPage = useMemo(() => lastPath === "overtime" || lastPath === "user", [bgColor]);

  return (
    <body className={cn("transition-all", bgColor)}>
      <BackSwiperWrapper>
        <main className={cn("flex flex-col items-center h-screen w-screen gap-4 transition-all duration-500 pt-16 px-6", isDarkPage && "text-white")}>{children}</main>
      </BackSwiperWrapper>
      <NavigationBottom isDarkPage={isDarkPage} />
    </body>
  );
};

export default AppWrapper;
