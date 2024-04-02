import BackButton from "@/components/ui/back-button";
import React, { ReactNode } from "react";

const ReportLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <BackButton />
      {children}
    </main>
  );
};

export default ReportLayout;
