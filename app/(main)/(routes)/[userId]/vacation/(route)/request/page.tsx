"use client";

import { Calendar } from "@/components/ui/calendar";
import { ko } from "date-fns/locale";

import TopLabel from "@/components/ui/top-label";
import React, { useMemo, useRef, useState } from "react";
import SlideDown from "@/components/motions/slide-down";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import { motion } from "framer-motion";
import { DateRange } from "react-day-picker";
import { useModalStore } from "@/store/use-modal-store";

const VacationRequestPage = () => {
  const [date] = useState<Date | null>(null);

  const { openWithAction } = useModalStore();
  const [currentPage, setCurrentPage] = useState(0);

  const defaultSelected: DateRange = {
    from: date,
    to: date,
  };

  const [range, setRange] = useState<DateRange | null>(defaultSelected);

  const isDisableDate = (disableDate: Date) => {
    const day = disableDate.getDay();
    return day === 0 || day === 6;
  };

  const diffrence = useMemo(() => {
    if (!range || !range.from || !range.to) return 1;

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInMs = Math.abs(range.from.getTime() - range.to.getTime());
    return Math.floor(diffInMs / oneDay) + 1;
  }, [range]);

  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <main className="flex flex-col items-center h-screen min-w-screen gap-4 pt-16 px-6 text-white">
      <TopLabel
        scrolledClassName="bg-primary-dark top-0 block"
        titleClassName="text-zinc-200"
        label="연차 신청"
      />

      <Swiper
        ref={swiperRef}
        className="h-screen w-full"
        allowTouchMove={false}
      >
        <SwiperSlide className="h-screen flex">
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
                cell: "w-12 h-12 flex ㅊjustify-center my-[-4px]",
                day: "w-12 h-12text-xl text-center rounded-2xl transition-all",
                caption_label: "text-2xl font-bold",
                head_cell: "w-12 h-12",
              }}
            />
          </SlideDown>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDown>
            <div className="text-zinc-200 my-2 text-xl font-bold">연차 사유를 작성해주세요. (선택)</div>

            <textarea
              ref={textarea}
              placeholder="쉴래요 ~~~~"
              className="w-full h-24 mt-2 p-4 bg-zinc-600 text-white focus:border-emerald-400 focus:border-2 box-border focus:bg-zinc-700 rounded-xl transition-all"
            ></textarea>
          </SlideDown>
        </SwiperSlide>
      </Swiper>

      <motion.button
        className="mt-auto mb-32 py-4 w-full text-xl bg-emerald-400 text-white rounded-2xl"
        initial={{ y: 300 }}
        animate={{ y: range === null || range === undefined || !range.to || !range.from || !range.to.toDateString() ? 300 : 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => {
          if (swiperRef.current.swiper.activeIndex) {
            openWithAction({
              type: "vacation",
              payload: range,
            });
          } else {
            swiperRef.current.swiper.slideNext();
            setTimeout(() => textarea?.current.focus(), 500);
          }

          setCurrentPage(swiperRef.current.swiper.activeIndex);
        }}
      >
        {currentPage ? "연차 신청" : "다음"}
      </motion.button>
    </main>
  );
};

export default VacationRequestPage;
