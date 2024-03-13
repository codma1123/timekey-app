import { getReport } from "@/api/get-report";
import ReportLocation from "@/app/(main)/(routes)/[userId]/reports/[id]/(component)/report-location";
import SlideDown from "@/components/motions/slide-down";
import BackButton from "@/components/ui/back-button";

interface ReportPageParams {
  id: number;
  userId: number;
}

const ReportPage = async ({ params }: { params: ReportPageParams }) => {
  const { id, userId } = params;

  const report = await getReport(id);

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <BackButton />
      <SlideDown
        className="text-3xl font-bold mt-3"
        delay={0.3}
      >
        {report.date.toLocaleDateString()}
      </SlideDown>

      <ReportLocation
        userId={userId}
        report={report}
      />
    </div>
  );
};

export default ReportPage;
