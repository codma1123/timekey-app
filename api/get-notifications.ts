import { Notification } from "@/types/notification";

export const getNotifications = (userId: number): Promise<Notification[]> => {
  return new Promise((resolve) => resolve([]));
};
