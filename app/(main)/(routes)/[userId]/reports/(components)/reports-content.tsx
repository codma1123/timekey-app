"use client";

import ReportCalendar from "@/app/(main)/(routes)/[userId]/reports/(components)/report-calendar";
import ReportList from "@/app/(main)/(routes)/[userId]/reports/(components)/report-list";
import { ReportStatusMap } from "@/app/(main)/(routes)/[userId]/reports/(map)/report-status-map";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { StatusMap } from "@/types/status-map";
import { Report, ReportStatus } from "@prisma/client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCheck, FilterIcon, List } from "lucide-react";
import { useState } from "react";

type ReportMode = "list" | "calendar";
type Checked = DropdownMenuCheckboxItemProps["checked"];

const ReportContent = ({ reports }: { reports: Report[] }) => {
  const [mode, setMode] = useState<ReportMode>("list");

  const [isDone, setIsDone] = useState<Checked>(true);
  const [isEarly, setIsEarly] = useState<Checked>(true);
  const [isHalfVacation, setIsHalfVacation] = useState<Checked>(true);
  const [isStandby, setIsStandby] = useState<Checked>(true);
  const [isVacation, setisVacation] = useState<Checked>(true);
  const [isWorking, setIsWorking] = useState<Checked>(true);

  const reportDropdownMenusItems: (StatusMap & { checked: Checked; onCheckedChange: (checked: boolean) => void })[] = [
    {
      ...ReportStatusMap["DONE"],

      checked: isDone,
      onCheckedChange: (check) => {
        setIsDone(check);
        setFilters(check, "DONE");
      },
    },
    {
      ...ReportStatusMap["WORKING"],

      checked: isWorking,
      onCheckedChange: (check) => {
        setIsWorking(check);
        setFilters(check, "WORKING");
      },
    },
    {
      ...ReportStatusMap["STANDBY"],

      checked: isStandby,
      onCheckedChange: (check) => {
        setIsStandby(check);
        setFilters(check, "STANDBY");
      },
    },
    {
      ...ReportStatusMap["EARlLY"],

      checked: isEarly,
      onCheckedChange: (check) => {
        setIsEarly(check);
        setFilters(check, "EARlLY");
      },
    },
    {
      ...ReportStatusMap["VACATION"],

      checked: isVacation,
      onCheckedChange: (check) => {
        setisVacation(check);
        setFilters(check, "VACATION");
      },
    },
    {
      ...ReportStatusMap["HALF_VACATION"],

      checked: isHalfVacation,
      onCheckedChange: (check) => {
        setIsHalfVacation(check);
        setFilters(check, "HALF_VACATION");
      },
    },
  ];

  const [filter, setFilter] = useState<ReportStatus[]>(["DONE", "EARlLY", "HALF_VACATION", "VACATION", "WORKING", "STANDBY"]);

  const setFilters = (check: boolean, status: ReportStatus) => {
    if (check) {
      setFilter((filter) => [...filter, status]);
    } else {
      setFilter((filter) => filter.filter((filter) => filter !== status));
    }
  };

  const filteredReports = reports.filter((report) => filter.includes(report.status));

  return (
    <>
      <div className="flex absolute top-[-2.5rem] right-0 gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-7 bg-content">
              필터
              <FilterIcon className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-zinc-700 text-white border-0">
            <DropdownMenuLabel className="flex justify-between">
              필터
              <Button
                className="h-5 px-1"
                variant="ghost"
                onClick={() => {
                  reportDropdownMenusItems.forEach(({ onCheckedChange }) => onCheckedChange(true));
                }}
              >
                <CheckCheck />
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {reportDropdownMenusItems.map(({ text, color, ...props }) => (
              <DropdownMenuCheckboxItem
                {...props}
                className={cn("pr-6", color)}
              >
                {text}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <AnimatePresence>
          {mode === "calendar" ? (
            <Button
              className="h-7 bg-content"
              variant="destructive"
              onClick={() => setMode("list")}
            >
              목록
              <List className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              className="h-7 bg-content"
              variant="destructive"
              onClick={() => setMode("calendar")}
            >
              달력
              <Calendar className="h-4 w-4 ml-2" />
            </Button>
          )}
        </AnimatePresence>
      </div>

      {mode === "calendar" ? <ReportCalendar reports={filteredReports} /> : <ReportList reports={filteredReports} />}
    </>
  );
};

export default ReportContent;
