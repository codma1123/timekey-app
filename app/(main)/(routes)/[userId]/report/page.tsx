"use client";

import { ClockIcon } from "@radix-ui/react-icons";
import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TopLabel from "@/components/ui/top-label";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import StrechableAlert from "@/components/ui/stretchable-alert";

const ReportPage = () => {
  const rate = 98;

  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 text-white">
      <TopLabel
        scrolledClassName="bg-white top-0"
        titleClassName="text-white"
        label="근무 기록"
      />

      <div className="text-xl w-full text-white font-bold mt-2">근무 요약</div>

      <SlideDown delay={0.6}>
        <StrechableAlert
          alertClassName="bg-content"
          extend={<div className="text-center text-2xl mt-8 font-bold">222일 14시간 20일</div>}
        >
          <ClockIcon className="h-4 w-4" />
          <span className="ml-2"> 총 근무일수 </span>
          <span className="ml-auto text-2xl"> 222일 </span>
        </StrechableAlert>

        <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
          <AlertDescription className="pr-2 flex items-center h-full">
            <ClockIcon className="h-4 w-4" />
            <span className="ml-2"> 근무 건전도 </span>
            <span className={cn("ml-auto text-2xl font-bold", rate > 95 ? "text-emerald-400" : "text-yellow-400")}> {rate} % </span>
          </AlertDescription>
        </Alert>

        <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
          <AlertDescription className="pr-2 flex items-center h-full">
            <ClockIcon className="h-4 w-4" />
            <span className="mx-auto">이번주 3시간이나 야근했어요.</span>
          </AlertDescription>
        </Alert>
      </SlideDown>

      <SlideDown delay={1.1}>
        <Alert className="border-0 bg-content rounded-2xl h-56 mt-4">
          <AlertDescription></AlertDescription>
        </Alert>
      </SlideDown>

      {/* <FullSheet
        beforeSlideContent={<div>전</div>}
        afterSlideContent={<div>후</div>}
      /> */}
    </main>
  );
};

export default ReportPage;
