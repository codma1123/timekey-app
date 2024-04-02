import { StatusMap } from "@/types/status-map";
import { ReportStatus } from "@prisma/client";

export const ReportStatusMap: Record<ReportStatus, StatusMap> = {
  DONE: {
    color: "text-emerald-400",
    text: "정상 근무 완료",
  },
  EARlLY: {
    color: "text-emerald-400",
    text: "조퇴",
  },
  HALF_VACATION: {
    color: "text-yellow-400",
    text: "반차",
  },
  STANDBY: {
    color: "text-white",
    text: "근무 대기중",
  },
  VACATION: {
    color: "text-emerald-400",
    text: "연차",
  },
  WORKING: {
    color: "text-sky-400",
    text: "근무중",
  },
  ABSENT: {
    color: "text-rose-400",
    text: "무단 결근",
  },
  CONFIRM_REQUIRED: {
    color: "text-yellow-400",
    text: "확인 필요",
  },
} as const;
