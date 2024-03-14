import { ReactNode } from "react";

import NavigationBottom from "@/components/ui/navigation/navigation-bottom";
import BackSwipe from "@/components/motions/back-swipe";
import BodyProvider from "@/components/provider/body-provider";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BodyProvider>
      <BackSwipe>{children}</BackSwipe>
      <NavigationBottom />
      <Toaster />
    </BodyProvider>
  );
};

export default MainLayout;
