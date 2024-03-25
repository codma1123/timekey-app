import { getUser } from "@/api/db/auth/get-user";
import SetStandardTimeBottomOver from "@/components/bottom-overs/set-standard-time-bottom-over";
import { delay } from "@/lib/delay";
import { User } from "@prisma/client";

const SetStandardTime = async ({ user }: { user: User }) => {
  await delay(700);

  if (user.startHour === null || user.startMinute === null || user.endHour === null || user.endMinute) {
    return <SetStandardTimeBottomOver userId={user.id} />;
  }

  return null;
};

export default SetStandardTime;
