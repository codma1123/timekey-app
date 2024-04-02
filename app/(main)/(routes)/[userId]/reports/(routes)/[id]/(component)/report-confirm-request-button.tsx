"use client";

import { Report } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ReportConfirmRequestButtonProps {
  report: Report;
}

const ReportConfirmRequestButton = ({ report }: ReportConfirmRequestButtonProps) => {
  const { id: reportId, userId } = report;
  const router = useRouter();

  return (
    <button
      className="py-4 w-full mt-auto mb-6 text-xl bg-emerald-400 text-white transition-transform duration-600 rounded-2xl"
      onClick={() => {
        router.push(`/${userId}/reports/${reportId}/request`);
      }}
    >
      퇴근 처리 요청
    </button>
  );
};

export default ReportConfirmRequestButton;
