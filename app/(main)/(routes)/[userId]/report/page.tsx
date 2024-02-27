"use client";

import { ClockIcon } from "@radix-ui/react-icons";
import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TopLabel from "@/components/ui/top-label";

const ReportPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 text-white">
      <TopLabel
        scrolledClassName="bg-white top-0"
        titleClassName="text-white"
        label="근무 기록"
      />

      <SlideDown delay={0.6}>
        <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
          <AlertDescription className="pr-2 flex items-center h-full">
            <ClockIcon className="h-4 w-4" />
            <span className="mx-auto">이번주 3시간이나 야근했어요.</span>
          </AlertDescription>
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
