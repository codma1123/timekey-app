import { delay } from "@/lib/delay";
import { ReportDetail, ReportPageResponse } from "@/types/report";

export const getReportPageResponse = async (userId: number): Promise<ReportPageResponse> => {
  await delay(200);
  return {
    totalWorkDay: Number((Math.random() * 1000).toFixed()),
    healthyRate: 98,
  };
};

export const getReport = async (id: number): Promise<ReportDetail> => {
  await delay(100);
  return {
    date: new Date(),
    locationId: 9,
    startTime: new Date(),
    endTime: new Date(),
    status: "normal",
    id: 2,
  };
};
