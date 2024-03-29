import TopNavs from "@/app/(main)/(routes)/[userId]/home/(components)/top-navs";
import { ReactNode } from "react";
import { User } from "@prisma/client";

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
      <TopNavs userId={userId} />

      {children}
    </main>
  );
};

export default HomeLayout;
