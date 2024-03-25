import { db } from "@/lib/prisma";

export interface StandardTime {
  hour: number;
  minute: number;
}

interface SetUserStandardTimeProps {
  userId: string;
  start: StandardTime;
  end: StandardTime;
}

export const setUserStandardTime = async ({ userId, start, end }: SetUserStandardTimeProps) => {
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      startHour: start.hour,
      startMinute: start.minute,
      endHour: end.hour,
      endMinute: end.minute,
    },
  });
};
