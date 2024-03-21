import { db } from "@/lib/prisma";

export const earlyWorkOff = async ({ reportId }: { reportId: string }) => {
  await db.report.update({
    where: {
      id: reportId,
    },
    data: {
      isWorking: false,
    },
  });
};
