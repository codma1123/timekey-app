"use client";

import { Calendar } from "@/components/ui/calendar";
import { ko } from "date-fns/locale";

import TopLabel from "@/components/ui/top-label";
import React, { useMemo, useState } from "react";
import SlideDown from "@/components/motions/slide-down";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DateRange } from "react-day-picker";
import { useModalStore } from "@/store/use-modal-store";

const VacationRequestPage = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const { onOpen, openWithAction } = useModalStore();

  const defaultSelected: DateRange = {
    from: date,
    to: date,
  };

  const [range, setRange] = useState<DateRange | null>(defaultSelected);

  const isDisableDate = (disableDate: Date) => {
    const day = disableDate.getDay();
    return day === 0 || day === 6; // 0은 일요일, 6은 토요일
  };

  const diffrence = useMemo(() => {
    if (!range || !range.from || !range.to) return 1;

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInMs = Math.abs(range.from.getTime() - range.to.getTime());
    return Math.floor(diffInMs / oneDay) + 1;
  }, [range]);

  return (
    <>
      <TopLabel
        scrolledClassName="bg-primary-dark top-0 block"
        titleClassName="text-zinc-200"
        label="연차 신청"
      />

      <SlideDown>
        <div className="text-zinc-200 my-2 text-xl font-bold">신청할 날짜를 선택 해 주세요.</div>
      </SlideDown>
      <SlideDown delay={0.3}>
        <Calendar
          mode="range"
          disabled={isDisableDate}
          selected={range}
          locale={ko}
          onSelect={setRange}
          className="rounded-md bg-zinc-700 ring-0 border-0 text-white text-xl justify-center flex items-center"
          classNames={{
            day_selected: "bg-white text-zinc-700 font-extrabold",
            nav_button: "border-0",
            cell: "w-12 h-12 flex justify-center my-[-4px]",
            day: "w-12 h-12text-xl text-center rounded-2xl transition-all",
            caption_label: "text-2xl font-bold",
            head_cell: "w-12 h-12",
          }}
        />
      </SlideDown>

      <SlideDown
        delay={0.4}
        className="mt-auto "
      >
        <motion.button
          className="mb-28 py-4 w-full bg-white text-2xl text-primary-dark font-bold rounded-2xl"
          whileTap={{
            scale: 0.95,
          }}
          onTapStart={() =>
            openWithAction({
              type: "vacation",
              payload: range,
            })
          }
          disabled={date === null || date === undefined}
        >
          신청
        </motion.button>
      </SlideDown>
    </>
  );
};

export default VacationRequestPage;
