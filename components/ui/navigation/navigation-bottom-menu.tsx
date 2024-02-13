import { motion, useAnimation } from "framer-motion";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import React, { ForwardRefExoticComponent, RefAttributes, memo } from "react";
import Link from "next/link";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface NavigationBottomMenuProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  href: string;
  text: string;
}

const NavigationBottomMenu = ({ Icon, href, text }: NavigationBottomMenuProps) => {
  const controls = useAnimation();

  return (
    <motion.div
      className={"z-40 flex-1 text-center"}
      onTouchStart={async () => {
        await Haptics.impact({ style: ImpactStyle.Medium });
    
        await controls.start({
          scale: [1.1, 1.2, 1.3],
          transition: { duration: 0.2 },
        });
      }}
      whileTap={{ scale: 0.95 }}
      animate={controls}
    >
      <Link
        href={href}
        className="bg-none"
      >
        <Icon className="mx-auto h-6 w-6 font-extrabold" />
        <span className="text-[12px]">{text}</span>
      </Link>
    </motion.div>
  );
};

export default memo(NavigationBottomMenu);
