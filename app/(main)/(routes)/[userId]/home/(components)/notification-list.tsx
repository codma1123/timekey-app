import { getNotifications } from "@/api/get-notifications";
import NotificationItem from "@/app/(main)/(routes)/[userId]/home/(components)/notification-item";
import SlideDown from "@/components/motions/slide-down";

const NotificationList = async ({ userId }: { userId: number }) => {
  const notifications = await getNotifications(userId);

  return (
    <SlideDown
      delay={1.6}
      className="w-full flex flex-col gap-2"
    >
      {notifications.map((notification) => (
        <NotificationItem notification={notification} />
      ))}
    </SlideDown>
  );
};

export default NotificationList;
