import EndWorkButton from "@/app/(main)/(routes)/[userId]/home/(components)/end-work-button";
import { toDateFormat } from "@/lib/utils";
import { createReport } from "@/api/db/reports/create-report";
import { findReport } from "@/api/db/reports/find-report";
import { getUser } from "@/api/db/auth/get-user";
import StartWorkButton from "@/app/(main)/(routes)/[userId]/home/(components)/start-work-button";
import SetUserStandardTimeBottomOver from "@/components/bottom-overs/set-user-standard-time-bottom-over";

const HomePage = async ({ params }: { params: { userId: UUID } }) => {
  const { userId } = params;

  const date = toDateFormat(new Date());

  const user = await getUser({ userId });
  const report = (await findReport({ date, userId })) || (await createReport({ date, userId }));

  const isWorkingAsync = report !== null && report.isWorking;

  return (
    <div className="flex flex-col items-center h-screen min-w-screen gap-4 px-6 pt-16">
      <EndWorkButton
        report={report}
        user={user}
        isWorkingAsync={isWorkingAsync}
      />

      {!isWorkingAsync && (
        <StartWorkButton
          report={report}
          user={user}
          isWorkingAsync={isWorkingAsync}
        />
      )}

      {(user.startHour === null || user.startMinute === null || user.endHour === null || user.endMinute === null) && <SetUserStandardTimeBottomOver userId={user.id} />}
    </div>
  );
};

export default HomePage;
