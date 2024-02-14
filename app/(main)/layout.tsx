"use client";

import { ReactNode, useMemo } from "react";
import NavigationBottom from "@/components/ui/navigation/navigation-bottom";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import BackSwipe from "@/components/motions/back-swipe";

import { Dosis, IBM_Plex_Sans_KR } from "next/font/google";

const dosis = Dosis({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dosis",
});

const IBM_KR = IBM_Plex_Sans_KR({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm_kr",
});

const MainLayout = ({ children }: { children: ReactNode; params: { userId: string } }) => {
  const path = usePathname();

  const pathBg = {
    home: "bg-primary",
    overtime: "bg-overtime",
    vacation: "bg-text",
    user: "bg-white",
  };

  const lastPath = useMemo(() => path.split("/").at(-1), [path]);

  const bgColor = useMemo(() => pathBg[lastPath], [lastPath]);
  const isDarkPage = useMemo(() => lastPath === "overtime" || lastPath === "user", [bgColor]);

  return (
    <body className={cn("transition-all", bgColor, dosis.className, IBM_KR.className)}>
      <BackSwipe>
        <main className={cn("flex flex-col items-center h-screen w-screen gap-4 transition-all duration-500 pt-16 px-6", isDarkPage && "text-white")}>{children}</main>
      </BackSwipe>
      <NavigationBottom isDarkPage={isDarkPage} />
    </body>
  );
};

export default MainLayout;
