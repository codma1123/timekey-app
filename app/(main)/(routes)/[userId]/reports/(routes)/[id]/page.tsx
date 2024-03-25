import { getUser } from "@/api/db/auth/get-user";
import { getLocation } from "@/api/db/locations/get-location";
import { getReport } from "@/api/db/reports/get-report";

import { ReportStatusMap } from "@/app/(main)/(routes)/[userId]/reports/(map)/report-status-map";
import ReportContent from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-content";
import ReportLocation from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-location";
import ReportTitle from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-title";
import SlideDown from "@/components/motions/slide-down";
import BackButton from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface ReportPageParams {
  id: string;
  userId: string;
}

const ReportPage = async ({ params }: { params: ReportPageParams }) => {
  const { id, userId } = params;

  const report = await getReport({ id });
  const { date, startTime, endTime, status, isLate, locationId } = report;
  const { color, text } = ReportStatusMap[status];

  const timeDiffrence = (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60 * 60);

  const location = await getLocation({ locationId });

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <BackButton />

      <SlideDown className="text-4xl font-bold mt-3">{date}</SlideDown>

      <SlideDown delay={0.5}>
        <ReportTitle>근무형태</ReportTitle>
        <ReportContent>
          <span className={cn(color)}>{text}</span>
        </ReportContent>

        {status !== "VACATION" && (
          <>
            <ReportTitle>출근 시간</ReportTitle>

            <ReportContent>
              <span>
                {new Date(startTime).toLocaleTimeString()}
                {isLate && <Badge className="bg-rose-400 text-white ml-2">지각</Badge>}
              </span>
            </ReportContent>
          </>
        )}

        {status !== "WORKING" && status !== "VACATION" && (
          <>
            <ReportTitle>퇴근 시간</ReportTitle>
            <ReportContent>
              <span></span>
            </ReportContent>
          </>
        )}

        {(status === "DONE" || status === "EARlLY" || status === "HALF_VACATION") && (
          <>
            <ReportTitle>근무 시간</ReportTitle>
            <ReportContent>{timeDiffrence}시간</ReportContent>
          </>
        )}
      </SlideDown>

      <ReportLocation
        userId={userId}
        location={location}
      />
    </div>
  );
};

export default ReportPage;
