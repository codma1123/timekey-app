export type ReportStatus = "normal";

export const ReportStatusMap: Record<ReportStatus, { text: string; color: string }> = {
  normal: {
    text: "정상 근무 완료",
    color: "emerald",
  },
};

export type Report = {
  date: Date;
  startTime: Date;
  endTime: Date;
  locationId: number;
  id: number;
  status: ReportStatus;
};

export type ReportSummary = {
  totalWorkDay: number;
  healthyRate: number;
};
