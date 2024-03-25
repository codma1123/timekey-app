import React, { ReactNode } from "react";

const ReportsListLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">{children}</div>;
};

export default ReportsListLayout;
