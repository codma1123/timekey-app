import SetUserStandardTimeBottomOver from "@/components/bottom-overs/set-user-standard-time-bottom-over";
import { delay } from "@/lib/delay";
import { User } from "@prisma/client";

const SetUserStandardTime = async ({ user }: { user: User }) => {
  await delay(700);

  if (user.startHour === null || user.startMinute === null || user.endHour === null || user.endMinute === null) {
    return <SetUserStandardTimeBottomOver userId={user.id} />;
  }

  return null;
};

export default SetUserStandardTime;
