import { delay } from "@/lib/utils";
import { ReportSummary } from "@/types/report";

export const getReportSummary = async (): Promise<ReportSummary> => {
  await delay(100);
  return {
    totalWorkDay: 10,
    wholesomeRate: 98,
  };
};

export const getReport = () => {};
