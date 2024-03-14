"use client";

import { Notification } from "@/types/notification";
import { motion } from "framer-motion";
import SwapeMotion from "@/components/motions/swipe";
import Content from "@/components/ui/content";
import { MessageSquareWarning } from "lucide-react";

const NotificationItem = ({ notification }: { notification: Notification }) => {
  return (
    <motion.div
      key={notification.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => {}}
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
  );
};

export default NotificationItem;
