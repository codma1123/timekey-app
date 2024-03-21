import { db } from "@/lib/prisma";

export const startWork = async ({ reportId, locationId }: { reportId: string; locationId: string }) => {
  await db.report.update({
    where: {
      id: reportId,
    },
    data: {
      isWorking: true,
      locationId,
    },
  });
};
