import { db } from "@/lib/prisma";
import { Report } from "@prisma/client";

export const findReport = async ({ date, userId }: { date: string; userId: string }): Promise<Report | null> => {
  return (
    (await db.report.findFirst({
      where: {
        userId: {
          equals: userId,
        },
        date: {
          equals: date,
        },
      },
    })) || null
  );
};
