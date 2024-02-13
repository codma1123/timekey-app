import { lockClosedSharp, personSharp, moonSharp, bedSharp } from "ionicons/icons";
import BottomNavMenu from "@/app/components/BottomNav/menu";
import classNames from "classnames";

interface BottomNavProp {
  className?: string;
  dark?: boolean;
}

export type BottomNavMenu = {
  icon: string;
  text: string;
  href: string;
};

export default function BottomNav({ className, dark }: BottomNavProp) {
  const bottomNavMenus: BottomNavMenu[] = [
    {
      icon: lockClosedSharp,
      text: "출/퇴근",
      href: "/work",
    },
    {
      icon: moonSharp,
      text: "야근",
      href: "/overtime",
    },
    {
      icon: bedSharp,
      text: "연차",
      href: "/vacation",
    },
    {
      icon: personSharp,
      text: "사용자",
      href: "/user",
    },
  ];

  return (
    <>
      <div
        className={classNames(
          "absolute bottom-0 w-full h-bottom bg-secondary rounded-r-3xl rounded-bottom touch-auto text-black flex items-center justify-around transition-all duration-500",
          dark && "bg-white"
        )}
      >
        {bottomNavMenus.map((bottomNavMenu) => (
          <BottomNavMenu
            icon={bottomNavMenu.icon}
            href={bottomNavMenu.href}
            key={bottomNavMenu.icon}
          >
            {bottomNavMenu.text}
          </BottomNavMenu>
        ))}
      </div>
    </>
  );
}
