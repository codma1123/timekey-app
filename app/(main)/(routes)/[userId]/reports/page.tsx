import { getReportPageResponse } from "@/api/get-report";

import PullToRefresh from "@/components/actions/pull-to-refresh";
import TopLabel from "@/components/ui/top-label";
import SlideDown from "@/components/motions/slide-down";
import StrechableAlert from "@/components/ui/stretchable-alert";
import ReportList from "@/app/(main)/(routes)/[userId]/reports/(components)/report-list";
import { ClockIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import WorkHealthy from "@/app/(main)/(routes)/[userId]/reports/(components)/work-healthy";

const ReportsPage = async ({ params }: { params: { userId: number } }) => {
  const { userId } = params;
  const { totalWorkDay, healthyRate } = await getReportPageResponse(userId);

  return (
    <PullToRefresh>
      <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
        <TopLabel
          scrolledClassName="bg-white top-0"
          scrolledBackgroundColor="rgb(33 33 33)"
          titleClassName="text-white"
          label="근무 기록"
        />

        <SlideDown>
          <div className="text-xl w-full text-white font-bold mt-2 ">근무 요약</div>
        </SlideDown>

        <SlideDown>
          <StrechableAlert
            alertClassName="bg-content"
            extend={<div className="text-center text-2xl mt-8 font-bold">222일 14시간 20일</div>}
          >
            <ClockIcon className="h-4 w-4" />
            <span className="ml-2"> 총 근무일수 </span>
            <span className="ml-auto text-2xl"> {totalWorkDay} 일</span>
          </StrechableAlert>

          <WorkHealthy
            healthyRate={healthyRate}
            userId={userId}
          />

          <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
            <AlertDescription className="pr-2 flex items-center h-full">
              <ClockIcon className="h-4 w-4" />
              <span className="mx-auto">이번주 3시간이나 야근했어요.</span>
            </AlertDescription>
          </Alert>
        </SlideDown>

        <div className="text-xl w-full text-white font-bold mt-2">근무 내역</div>

        <ReportList userId={userId} />
      </div>
    </PullToRefresh>
  );
};

export default ReportsPage;
