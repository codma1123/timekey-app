"use client";

import { ReportStatusMap } from "@/app/(main)/(routes)/[userId]/reports/(map)/report-status-map";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Report } from "@prisma/client";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ReportItemProps {
  report: Report;
  children?: ReactNode;
}

const ReportItem = ({ report }: ReportItemProps) => {
  const router = useRouter();
  const { date, id: reportId, status, userId } = report;
  const { text, color } = ReportStatusMap[status];

  return (
    <Alert
      className="text-white bg-content ring-0 border-0 rounded-2xl active:ring-1 active:ring-emerald-400 transition-[box-shadow] duration-200 py-4"
      onClick={() => router.push(`/${userId}/reports/${reportId}`)}
    >
      <AlertDescription className="flex items-center">
        <CalendarIcon className="h-5 w-5" />
        <span className="ml-4">{date}</span>
        <span className={cn("ml-auto font-bold", color)}>{text}</span>
      </AlertDescription>
    </Alert>
  );
};

export default ReportItem;
