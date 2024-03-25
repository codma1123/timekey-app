import { getUser } from "@/api/db/auth/get-user";
import { db } from "@/lib/prisma";

interface StartWorkOptions {
  userId: string;
  reportId: string;
  locationId: string;
}

export const startWork = async ({ userId, reportId, locationId }: StartWorkOptions) => {
  const user = await getUser({ userId });

  const userStartTime = new Date();
  userStartTime.setHours(user.startHour, user.startMinute);

  const currentTime = new Date();

  await db.report.update({
    where: {
      id: reportId,
    },
    data: {
      isWorking: true,
      status: "WORKING",
      locationId,
      isLate: userStartTime < currentTime,
    },
  });
};
