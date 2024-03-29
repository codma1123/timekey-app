import HomeSettings from "@/app/(main)/(routes)/[userId]/home/(components)/top-navs";
import EndWorkButton from "@/app/(main)/(routes)/[userId]/home/(components)/end-work-button";
import { toDateFormat } from "@/lib/utils";
import { createReport } from "@/api/db/reports/create-report";
import { findReport } from "@/api/db/reports/find-report";
import SetStandardTime from "@/app/(main)/(routes)/[userId]/home/(components)/set-user-standard-time";
import { getUser } from "@/api/db/auth/get-user";
import StartWorkButton from "@/app/(main)/(routes)/[userId]/home/(components)/start-work-button";
import { User } from "@prisma/client";

const LOCATION_ID = "2217576d-1a1f-4f66-b7ed-7dbf83af01f2";

interface HomePageProps {
  params: {
    userId: UUID;
  };
}

const HomePage = async ({ params }: HomePageProps) => {
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
          locationId={LOCATION_ID}
        />
      )}

      <SetStandardTime user={user} />

      {/* <NotificationList userId={userId} /> */}
    </div>
  );
};

export default HomePage;
