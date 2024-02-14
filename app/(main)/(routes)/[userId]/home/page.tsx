"use client";

import SwapeMotion from "@/components/motions/swipe";
import Content from "@/components/ui/content";
import OutlineMotionButton from "@/components/ui/outline-motion-button";
import { useGlobalLoading } from "@/store/global-loading";
import { useWorkStore } from "@/store/work";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquareWarning } from "lucide-react";
import Open from "@/components/ui/open";
import { useModalStore } from "@/store/use-modal-store";
import HomeSettings from "@/components/home/home-settings";
import SlideDown from "@/components/motions/slide-down";

interface Notification {
  id: number;
  title: string;
  content: string;
  timestamp?: Date;
}

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(
    // [
    //   {
    //     id: 1,
    //     title: "알림",
    //     content: "내용내용",
    //   },
    //   {
    //     id: 2,
    //     title: "알림2",
    //     content: "내용내용내용",
    //   },
    //   {
    //     id: 3,
    //     title: "알림3",
    //     content: "내용내용내용내용",
    //   },
    // ]
    []
  );

  const { isWork, canWorkOff, earlyWorkOff, workOff } = useWorkStore();
  const { setLoading } = useGlobalLoading();
  const { onOpen } = useModalStore();

  const confirmHandle = async () => {
    setLoading(true);
    if (isWork) {
      await earlyWorkOff();
    } else {
      await workOff();
    }

    setLoading(false);
  };

  const onSwape = (id: number) => {
    setNotifications((states) => states.filter((state) => state.id !== id));
  };

  const onItemClick = (id: number) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  return (
    <>
      <HomeSettings />

      <OutlineMotionButton onClick={() => onOpen("ealryWorkoff")} />

      <SlideDown
        delay={1.6}
        className="w-full flex flex-col gap-2"
      >
        <AnimatePresence>
          {notifications.map((notification, i) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => onItemClick(notification.id)}
              layout
            >
              <SwapeMotion>
                <Content
                  className="bg-white"
                  Icon={MessageSquareWarning}
                >
                  {notification.title}
                </Content>
              </SwapeMotion>
            </motion.div>
          ))}
        </AnimatePresence>
      </SlideDown>

      <Open />
    </>
  );
};

export default HomePage;
