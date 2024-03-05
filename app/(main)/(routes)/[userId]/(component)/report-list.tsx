import { getReports } from "@/api/get-reports";
import ReportItem from "@/app/(main)/(routes)/[userId]/(component)/report-item";
import IntersectionMotionDiv from "@/components/motions/intersection";

const ReportList = async () => {
  const reports = await getReports(5);

  return (
    <div className="w-full flex gap-x-2 overflow-x-scroll pb-4">
      {reports.map((report, i) => (
        <IntersectionMotionDiv initial>
          <ReportItem
            report={report}
            key={i}
          />
        </IntersectionMotionDiv>
      ))}
    </div>
  );
};

export default ReportList;
