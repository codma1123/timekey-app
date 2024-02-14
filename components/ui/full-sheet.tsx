"use client";

import SlideUpMotion from "@/components/motions/slide-up";
import React, { ReactNode, useState } from "react";

interface FullSheetProps {
  children?: ReactNode;
  beforeSlideContent?: ReactNode;
  afterSlideContent?: ReactNode;
}

const FullSheet = ({ children, beforeSlideContent, afterSlideContent }: FullSheetProps) => {
  const [isSheetActive, setIsSheectActive] = useState<boolean | null>(null);

  const setActivate = () => {
    if (isSheetActive === null) setIsSheectActive(true);
    else setIsSheectActive((active) => !active);
  };

  return (
    <SlideUpMotion
      className="absolute bottom-0 w-screen h-40 bg-black rounded-3xl z-50 p-8"
      onClick={setActivate}
      onPanEnd={setActivate}
      isActive={isSheetActive}
      beforeSlideContent={beforeSlideContent}
      afterSlideContent={afterSlideContent}
    >
      <div className="mx-auto mt-4 bg-zinc-100 w-8 h-1 rounded-lg absolute top-0 left-1/2 translate-x-[-50%]"></div>
      {isSheetActive && children}
    </SlideUpMotion>
  );
};

export default FullSheet;
