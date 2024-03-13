"use client";

import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Report } from "@/types/report";
import { Hotel } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface ReportLocationProps {
  userId: number;
  report: Report;
}

const ReportLocation = ({ report, userId }: ReportLocationProps) => {
  const router = useRouter();
  const { locationId } = report;

  return (
    <Alert
      className="border-0 bg-content rounded-2xl mt-4 flex items-center"
      onClick={() => router.push(`/${userId}/home/map?locationId=${locationId}`)}
    >
      <div>
        <Hotel className="my-auto" />
      </div>
      <div className="ml-4">
        <AlertTitle>근무지</AlertTitle>
        <AlertDescription className="mt-2">가산 비투텍 본사</AlertDescription>
      </div>
      <div className="ml-auto self-end text-zinc-400 text-sm">근무지 확인</div>
    </Alert>
  );
};

export default ReportLocation;
