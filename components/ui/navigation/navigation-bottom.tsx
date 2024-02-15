"use client";

import { cn } from "@/lib/utils";
import React, { ForwardRefExoticComponent, RefAttributes, useMemo } from "react";
import { MoonIcon, LockClosedIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import NavigationBottomMenu from "@/components/ui/navigation/navigation-bottom-menu";
import { useParams } from "next/navigation";

export type BottomNavMenu = {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  text: string;
  href: string;
};

const NavigationBottom = ({ isDarkPage }: { isDarkPage: boolean }) => {
  const params = useParams<{ userId: string }>();

  const bottomNavMenus = useMemo<BottomNavMenu[]>(
    () => [
      {
        Icon: LockClosedIcon,
        text: "출/퇴근",
        href: `/${params.userId}/home`,
      },
      {
        Icon: MoonIcon,
        text: "야근",
        href: `/${params.userId}/overtime`,
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
