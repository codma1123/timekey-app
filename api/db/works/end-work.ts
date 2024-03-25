import { db } from "@/lib/prisma";

export const endWork = async ({ reportId }: { reportId: string }) => {
  await db.report.update({
    where: {
      id: reportId,
    },
    data: {
      isWorking: false,
      status: "DONE",
    },
  });
};
