"use client";

import { cn } from "@/lib/utils";
import React, { ForwardRefExoticComponent, RefAttributes, useMemo } from "react";
import { MoonIcon, LockClosedIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import NavigationBottomMenu from "@/components/ui/navigation/navigation-bottom-menu";
import { useParams, usePathname } from "next/navigation";
import { LucideIcon, ScrollText } from "lucide-react";

export type BottomNavMenu = {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>> | LucideIcon;
  text: string;
  href: string;
};

const NavigationBottom = () => {
  const params = useParams<{ userId: string }>();
  const path = usePathname();

  const lastPath = useMemo(() => path.split("/").at(2), [path]);
  const isDarkPage = useMemo(() => lastPath === "report" || lastPath === "user", [path]);

  const bottomNavMenus = useMemo<BottomNavMenu[]>(
    () => [
      {
        Icon: LockClosedIcon,
        text: "출/퇴근",
        href: `/${params.userId}/home`,
      },
      {
        Icon: ScrollText,
        text: "근무 기록",
        href: `/${params.userId}/reports`,
      },
      {
        Icon: RocketIcon,
        text: "연차",
        href: `/${params.userId}/vacation`,
      },
      {
        Icon: PersonIcon,
        text: "사용자",
        href: `/${params.userId}/user`,
      },
    ],
    [params.userId]
  );

  return (
    <div
      className={cn(
        "fixed bottom-0 w-full h-20 bg-primary-dark rounded-bottom rounded-b-none touch-auto text-zinc-300 flex items-center justify-around transition-all duration-500 z-50",
        isDarkPage && "bg-white text-black"
      )}
    >
      {bottomNavMenus.map((bottomNavMenu, i) => (
        <NavigationBottomMenu
          {...bottomNavMenu}
          key={i}
        />
      ))}
    </div>
  );
};

export default NavigationBottom;
