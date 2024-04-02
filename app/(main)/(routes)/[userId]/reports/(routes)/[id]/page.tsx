import { getLocation } from "@/api/db/locations/get-location";
import { getReport } from "@/api/db/reports/get-report";

import { ReportStatusMap } from "@/app/(main)/(routes)/[userId]/reports/(map)/report-status-map";
import ReportConfirmRequestButton from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-confirm-request-button";
import ReportContent from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-content";
import ReportLocation from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-location";
import ReportTitle from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-title";
import SlideDown from "@/components/motions/slide-down";
import { Badge } from "@/components/ui/badge";

import { cn, getWorkTime } from "@/lib/utils";

interface ReportPageParams {
  id: string;
  userId: string;
}

const ReportPage = async ({ params }: { params: ReportPageParams }) => {
  const { id, userId } = params;

  const report = await getReport({ id });
  const { date, startTime, endTime, status, isLate, locationId } = report;
  const { color, text } = ReportStatusMap[status];

  const { hours, minutes } = startTime !== null && endTime !== null ? getWorkTime(startTime, endTime) : { hours: 0, minutes: 0 };

  const location = await getLocation({ locationId });

  return (
    <>
      <SlideDown className="text-2xl font-bold mt-3">{date}</SlideDown>

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
            <ReportContent>{endTime ? <span>{endTime.toLocaleTimeString()}</span> : <span className="text-yellow-400">확인 필요</span>}</ReportContent>
          </>
        )}

        {(status === "DONE" || status === "EARlLY" || status === "HALF_VACATION") && (
          <>
            <ReportTitle>근무 시간</ReportTitle>
            <ReportContent>
              {hours === 0 ? (
                <span className="text-yellow-400">확인 필요</span>
              ) : (
                <span>
                  {hours}시간 {minutes}분
                </span>
              )}
            </ReportContent>
          </>
        )}
      </SlideDown>

      {location && (
        <ReportLocation
          userId={userId}
          location={location}
        />
      )}

      {status === "CONFIRM_REQUIRED" && <ReportConfirmRequestButton report={report} />}
    </>
  );
};

export default ReportPage;
