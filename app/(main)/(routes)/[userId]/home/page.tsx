import OutlineMotionButton from "@/app/(main)/(routes)/[userId]/home/(components)/outline-motion-button";

import Open from "@/components/ui/open";
import HomeSettings from "@/app/(main)/(routes)/[userId]/home/(components)/home-settings";
import NotificationList from "@/app/(main)/(routes)/[userId]/home/(components)/notification-list";

const HomePage = ({ params }: { params: { userId: number } }) => {
  const { userId } = params;

  return (
    <main className="flex flex-col items-center h-screen min-w-screen gap-4 pt-16 px-6 ">
      <HomeSettings />

      <OutlineMotionButton />

      <NotificationList userId={userId} />

      <Open />
    </main>
  );
};

export default HomePage;
