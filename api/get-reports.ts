import { Report } from "@/types/report";

export const getReports = (id: number): Promise<Report[]> =>
  new Promise((resolve) =>
    resolve([
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
    ])
  );
