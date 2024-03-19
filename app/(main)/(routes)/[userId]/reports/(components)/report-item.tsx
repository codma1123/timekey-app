"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";
import { Report } from "@/types/report";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ReportItemProps {
  report: Report;
  children?: ReactNode;
}

const ReportItem = ({ report }: ReportItemProps) => {
  const router = useRouter();
  const userId = useAuthStore((state) => state.id);
  const { date, id } = report;

  return (
    <Alert
      className="text-white bg-content ring-0 border-0 rounded-2xl active:ring-1 active:ring-emerald-400 transition-[box-shadow] duration-200"
      onClick={() => router.push(`/${userId}/reports/${id}`)}
    >
      <AlertDescription className="flex items-center">
        <CalendarIcon className="h-5 w-5" />
        <span className="ml-4">{date.toLocaleDateString()}</span>
        <span className={cn("ml-auto text-lg font-bold")}>정상 근무 완료</span>
      </AlertDescription>
    </Alert>
  );
};

export default ReportItem;
