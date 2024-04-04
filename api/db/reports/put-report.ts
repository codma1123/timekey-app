import { db } from "@/lib/prisma";
import { RequestType } from "@prisma/client";

interface PutReportParams {
  userId: UUID;
  reportId: UUID;
  requestType: RequestType;
  description: string;
}

export const putReport = async ({ userId, reportId, requestType, description }: PutReportParams) => {
  try {
    const request = await db.request.create({
      data: {
        requestType,
        description,
        reportId,
        userId,
      },
    });

    const report = await db.report.update({
      where: {
        id: reportId,
      },
      data: {
        requestId: request.id,
      },
    });

  } catch (e) {
    console.log(e);
  }
};
