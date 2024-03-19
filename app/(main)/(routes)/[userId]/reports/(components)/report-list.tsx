import { getReports } from "@/api/get-reports";
import ReportCalendar from "@/app/(main)/(routes)/[userId]/reports/(components)/report-calendar";
import ReportItem from "@/app/(main)/(routes)/[userId]/reports/(components)/report-item";

const ReportList = async ({ userId }: { userId: number }) => {
  const reports = await getReports(userId);

  return (
    <>
      {reports.map((report, i) => (
        <ReportItem
          report={report}
          key={i}
        />
      ))}
      <ReportCalendar reports={reports} />
    </>
  );
};

export default ReportList;
