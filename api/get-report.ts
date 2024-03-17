import { delay } from "@/lib/delay";
import { Report, ReportSummary } from "@/types/report";

export const getReportSummary = async (userId: number): Promise<ReportSummary> => {
  await delay(200);
  return {
    totalWorkDay: Number((Math.random() * 1000).toFixed()),
    wholesomeRate: 98,
  };
};

export const getReport = async (id: number): Promise<Report> => {
  await delay(100);
  return {
    date: new Date(),
    locationId: 9,
    id: 2,
  };
};
