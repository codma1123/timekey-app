import PullToRefresh from "@/components/actions/pull-to-refresh";
import TopLabel from "@/components/ui/top-label";
import SlideDown from "@/components/motions/slide-down";
import StrechableAlert from "@/components/ui/stretchable-alert";
import { ClockIcon } from "@radix-ui/react-icons";
import WorkHealthy from "@/app/(main)/(routes)/[userId]/reports/(components)/work-healthy";
import { getReports } from "@/api/db/reports/get-reports";
import ReportsContent from "@/app/(main)/(routes)/[userId]/reports/(components)/reports-content";

const ReportsPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const reports = await getReports({ userId });

  const totalWorkDay = reports.length;

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
          <StrechableAlert
            alertClassName="bg-content"
            extend={<div className="text-center text-2xl mt-8 font-bold">222일 14시간 20일</div>}
          >
            <ClockIcon className="h-4 w-4" />
            <span className="ml-2"> 총 근무일수 </span>
            <span className="ml-auto text-2xl"> {totalWorkDay} 일</span>
          </StrechableAlert>

          <WorkHealthy
            reports={reports}
            userId={userId}
          />

          {/* <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
            <AlertDescription className="pr-2 flex items-center h-full">
              <ClockIcon className="h-4 w-4" />
              <span className="mx-auto">이번주 3시간이나 야근했어요.</span>
            </AlertDescription>
          </Alert> */}
        </SlideDown>

        <div className="text-xl w-full text-white font-bold mt-4">근무 내역</div>

        <div className="w-full relative flex flex-col gap-y-4">
          <ReportsContent reports={reports} />
        </div>
      </div>
    </PullToRefresh>
  );
};

export default ReportsPage;
