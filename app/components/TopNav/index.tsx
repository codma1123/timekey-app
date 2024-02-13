"use client";

import useAsyncState from "@/hooks/async-setter";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import { notifications } from "ionicons/icons";
import { Preferences } from "@capacitor/preferences";
import { cn } from "@/lib/utils";
import { BellIcon } from "@radix-ui/react-icons";

type AppKey = "notifications" | "etc";

interface TopNavProps {
  notificationsChanged?: (notification: boolean) => void;
}

const TopNav = (props: TopNavProps) => {
  const [isRinging, setIsRinging] = useAsyncState(500);
  const [isNotifications, setNotifications] = useState<boolean | null>(null);

  const setStorage = async (key: AppKey, value: any) => {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  };

  const getStorage = async <T = any,>(key: AppKey) => {
    const { value } = await Preferences.get({ key });

    return JSON.parse(value) as T;
  };

  useEffect(() => {
    const getNotification = async () => {
      const notify = await getStorage<boolean>("notifications");
      setNotifications(notify);
    };

    getNotification();
  }, []);

  const onNotificationsClick = async (e: MouseEvent) => {
    e.preventDefault();
    await Haptics.impact({ style: ImpactStyle.Light });
    await setStorage("notifications", !isNotifications);
    setIsRinging();
    setNotifications((isNotifications) => !isNotifications);
  };

  return (
    <div className="text-white text-xl self-end mr-4 absolute top-16 z-10">
      <motion.div
        onClick={onNotificationsClick}
        animate={{
          rotate: isRinging ? [0, -10, 10, -5, 5, 0] : 0,
          scale: isRinging ? [1.3, 1.3, 1.1, 1] : 1,
          transition: { duration: 0.5 },
        }}
      >
        <IonIcon
          className={cn("z-0", isNotifications ? "text-black" : "text-main")}
          icon={notifications}
          style={{ fontSize: "32px" }}
        />
      </motion.div>
    </div>
  );
};

export default TopNav;
