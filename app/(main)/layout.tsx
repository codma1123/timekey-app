import AppWrapper from "@/app/components/AppWrapper";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode; params: { userId: string } }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export default MainLayout;
