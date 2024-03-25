"use client";

import { ReportStatusMap } from "@/app/(main)/(routes)/[userId]/reports/(map)/report-status-map";
import { Calendar } from "@/components/ui/calendar";
import { toDateFormat } from "@/lib/utils";
import { Report, ReportStatus } from "@prisma/client";
import { Record } from "@prisma/client/runtime/library";
import { ko } from "date-fns/locale";
import _ from "lodash";
import { useRouter } from "next/navigation";

const ReportCalendar = ({ reports }: { reports: Report[] }) => {
  const reportsMap = _.keyBy(reports, "date");
  const router = useRouter();

  const getReportsMapModifier = (date: Date, status: ReportStatus) => {
    const formattedDate = toDateFormat(date);

    if (formattedDate in reportsMap) {
      return reportsMap[formattedDate].status === status;
    }

    return false;
  };

  const onClickDay = (date: Date) => {
    const formattedDate = toDateFormat(date);

    if (formattedDate in reportsMap) {
      const report = reportsMap[formattedDate];
      router.push(`/${report.userId}/reports/${report.id}`);
      return;
    }
  };

  const modifiers: Record<ReportStatus, (date: Date) => boolean> = {
    WORKING: (date: Date) => getReportsMapModifier(date, "WORKING"),
    STANDBY: (date: Date) => getReportsMapModifier(date, "STANDBY"),
    DONE: (date: Date) => getReportsMapModifier(date, "DONE"),
    EARlLY: (date: Date) => getReportsMapModifier(date, "EARlLY"),
    VACATION: (date: Date) => getReportsMapModifier(date, "VACATION"),
    HALF_VACATION: (date: Date) => getReportsMapModifier(date, "HALF_VACATION"),
  };

  const modifiersClassNames = Object.entries(ReportStatusMap).reduce((acc, [key, value]) => ({ ...acc, [key]: value.color.replace("text", "bg") }), {});

  return (
    <Calendar
      classNames={{
        day_selected: "bg-white text-zinc-700 font-extrabold",
        nav_button: "border-0",
        cell: "w-12 h-8 flex justify-center my-[-4px]",
        day: "w-12 h-8 text-xl text-center rounded-xl transition-all",
        caption_label: "text-2xl font-bold",
        head_cell: "w-12 h-8",
      }}
      locale={ko}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      onDayClick={onClickDay}
    />
  );
};

export default ReportCalendar;
