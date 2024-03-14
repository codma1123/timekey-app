import { Report } from "@/types/report";

export const getReports = async (userId: number): Promise<Report[]> =>
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
