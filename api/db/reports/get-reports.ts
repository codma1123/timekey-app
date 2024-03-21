import { db } from "@/lib/prisma";
import { Report } from "@prisma/client";
import _ from "lodash";

export const getReports = async ({ userId }: { userId: string }): Promise<Report[] | null> => {
  const { reports } = await db.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      reports: true,
    },
  });

  return _.sortBy(reports, "date").reverse();
};
