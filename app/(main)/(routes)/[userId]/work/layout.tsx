"use client";

import AppWrapper from "@/app/components/AppWrapper";
import BottomNav from "@/app/components/BottomNav";
import React, { ReactNode } from "react";

const WorkLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body
      suppressContentEditableWarning={true}
      className="bg-primary"
    >
      <AppWrapper>{children}</AppWrapper>
      <BottomNav />
    </body>
  );
};

export default WorkLayout;
