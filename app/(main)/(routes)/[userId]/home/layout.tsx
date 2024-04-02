import TopNavs from "@/app/(main)/(routes)/[userId]/home/(components)/top-navs";
import { ReactNode } from "react";
import ValidLocationAlert from "@/components/valid-location-alert";

interface HomeLayoutParams {
  children: ReactNode;
  params: {
    userId: UUID;
  };
}

const HomeLayout = async ({ children, params }: HomeLayoutParams) => {
  const { userId } = params;

  return (
    <main className="min-h-screen min-w-screen">
      <ValidLocationAlert />

      <TopNavs userId={userId} />

      {children}
    </main>
  );
};

export default HomeLayout;
