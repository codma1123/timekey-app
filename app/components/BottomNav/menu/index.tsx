import { motion, useAnimation } from "framer-motion";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import React, { ReactNode } from "react";
import { IonIcon } from "@ionic/react";
import Link from "next/link";

interface BottomNavMenuProps {
  icon: string;
  href: string;
  children?: ReactNode;
}

const BottomNavMenu = ({ icon, children, href }: BottomNavMenuProps) => {
  const controls = useAnimation();

  const onTouchStart = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });

    await controls.start({
      scale: [1.1, 1.2, 1.3],
      transition: { duration: 0.2 },
    });
  };

  return (
    <motion.div
      className="text-center flex-grow"
      onTouchStart={onTouchStart}
      whileTap={{ scale: 0.95 }}
      animate={controls}
    >
      <Link href={href}>
        <IonIcon
          icon={icon}
          className="text-2xl"
        />
        <div className="text-xs">{children}</div>
      </Link>
    </motion.div>
  );
};

export default BottomNavMenu;
