import { getReports } from "@/api/get-reports";
import ReportItem from "@/app/(main)/(routes)/[userId]/reports/(components)/report-item";

const ReportList = async ({ userId }: { userId: number }) => {
  const reports = await getReports(userId);

  return (
    <div className="w-full flex gap-x-2 overflow-x-scroll pb-4">
      {reports.map((report, i) => (
        <ReportItem
          report={report}
          key={i}
        />
      ))}
    </div>
  );
};

export default ReportList;
