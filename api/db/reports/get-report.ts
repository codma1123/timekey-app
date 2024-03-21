import { db } from "@/lib/prisma";
import { Report } from "@prisma/client";

export const getReport = async ({ id }: { id: string }): Promise<Report | null> => {
  return await db.report.findUnique({
    where: { id },
  });
};
