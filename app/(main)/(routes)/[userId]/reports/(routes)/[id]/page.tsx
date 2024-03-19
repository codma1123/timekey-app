import { getReport } from "@/api/get-report";
import ReportLocation from "@/app/(main)/(routes)/[userId]/reports/(routes)/[id]/(component)/report-location";
import SlideDown from "@/components/motions/slide-down";
import BackButton from "@/components/ui/back-button";
import { cn } from "@/lib/utils";
import { ReportStatusMap } from "@/types/report";
import { ReactNode } from "react";

interface ReportPageParams {
  id: number;
  userId: number;
}

const ReportTitle = ({ children }: { children: ReactNode }) => <div className="mt-4 text-md">{children}</div>;

const ReportItem = ({ children }: { children: ReactNode }) => <div className="text-md ml-1 text-zinc-400">{children}</div>;

const ReportPage = async ({ params }: { params: ReportPageParams }) => {
  const { id, userId } = params;

  const report = await getReport(id);

  const { date, startTime, endTime, status } = report;

  const reportStatus = ReportStatusMap[status];
  const timeDiffrence = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <BackButton />

      <SlideDown className="text-3xl font-bold mt-3">{date.toLocaleDateString()}</SlideDown>

      <SlideDown delay={0.5}>
        <ReportTitle>근무형태</ReportTitle>
        <ReportItem>
          <span className={cn(`text-${reportStatus.color}-400`)}>{reportStatus.text}</span>
        </ReportItem>

        <ReportTitle>출근 시간</ReportTitle>
        <ReportItem>{startTime.toLocaleTimeString()}</ReportItem>

        <ReportTitle>퇴근 시간</ReportTitle>
        <ReportItem>{endTime.toLocaleTimeString()}</ReportItem>

        <ReportTitle>근무 시간</ReportTitle>
        <ReportItem>{timeDiffrence}시간</ReportItem>
      </SlideDown>

      <ReportLocation
        userId={userId}
        report={report}
      />
    </div>
  );
};

export default ReportPage;
