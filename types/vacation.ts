import { StatusMap } from "@/types/status-map";

export type VacationStatus = "waiting" | "done";

export const VacationStatusMap: Record<VacationStatus, StatusMap> = {
  done: {
    text: "사용 완료",
    color: "text-emerald-400",
  },
  waiting: {
    text: "사용 예정",
    color: "text-sky-400",
  },
};

export interface Vacation {
  id: any;
  date: Date;
  allowed: boolean;
  status: VacationStatus;
  reason: string;
}

export interface VacationSummary {}

export interface VacationResponse {}
