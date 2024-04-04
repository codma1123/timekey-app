"use client";

import { useModalStore } from "@/store/use-modal-store";
import { Report } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ReportConfirmRequestButtonProps {
  report: Report;
}

const ReportConfirmRequestButton = ({ report }: ReportConfirmRequestButtonProps) => {
  const { id: reportId, userId, requestId } = report;
  const router = useRouter();
  const open = useModalStore((state) => state.onOpen);

  const onReportPutRequestButtonClick = useCallback(() => {
    if (requestId !== null) {
      open("caution");
    } else {
      router.replace(`/${userId}/reports/${reportId}/request`);
    }
  }, [report]);

  return (
    <button
      className="py-4 w-full mt-auto mb-6 text-xl bg-emerald-400 text-white transition-transform duration-600 rounded-2xl"
      onClick={onReportPutRequestButtonClick}
    >
      퇴근 처리 요청
    </button>
  );
};

export default ReportConfirmRequestButton;
