import { db } from "@/lib/prisma";
import { Report } from "@prisma/client";

export const createReport = async ({ userId, date }: { userId: string; date: string }): Promise<Report | null> => {
  return await db.report.create({
    data: {
      date,
      userId,
    },
  });
};
