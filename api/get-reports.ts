import { ReportSummary } from "@/types/report";

export const getReports = async (userId: number): Promise<ReportSummary[]> =>
  new Promise((resolve) =>
    resolve([
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
      {
        date: new Date(),
        id: 2,
        locationId: 6,
      },
    ])
  );
