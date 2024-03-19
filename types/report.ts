import { StatusMap } from "@/types/status-map";

export type ReportStatus = "normal";

export const ReportStatusMap: Record<ReportStatus, StatusMap> = {
  normal: {
    text: "정상 근무 완료",
    color: "emerald",
  },
};

export interface ReportDetail {
  date: Date;
  startTime: Date;
  endTime: Date;
  locationId: number;
  id: number;
  status: ReportStatus;
}

export interface ReportSummary {
  date: Date;
  id: number;
  locationId: number;
}

export interface ReportPageResponse {
  totalWorkDay: number;
  healthyRate: number;
}
