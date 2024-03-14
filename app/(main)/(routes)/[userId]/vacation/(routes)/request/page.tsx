"use client";

import { Calendar } from "@/components/ui/calendar";
import { ko } from "date-fns/locale";

import TopLabel from "@/components/ui/top-label";
import React, { useMemo, useRef, useState } from "react";
import SlideDown from "@/components/motions/slide-down";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import { motion } from "framer-motion";
import { DateRange, DaySelectionMode } from "react-day-picker";
import { useModalStore } from "@/store/use-modal-store";
import { delay } from "@/lib/delay";
import { useRouter } from "next/navigation";
import { CalendarClock, CalendarIcon, Undo2 } from "lucide-react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import Title from "@/components/ui/title";

const VacationRequestPage = () => {
  const [date] = useState<Date | null>(null);

  const { openWithAction } = useModalStore();
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

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

  const [calendarMode, setCalendarMode] = useState<DaySelectionMode>("default");

  const onOpen = useModalStore((state) => state.onOpen);

  const calendarProps = {
    disabled: isDisableDate,
    locale: ko,
    className: "rounded-md bg-zinc-700 ring-0 border-0 text-white text-xl justify-center flex items-center",
    classNames: {
      day_selected: "bg-white text-zinc-700 font-extrabold",
      nav_button: "border-0",
      cell: "w-12 h-12 flex ㅊjustify-center my-[-4px]",
      day: "w-12 h-12text-xl text-center rounded-2xl transition-all",
      caption_label: "text-2xl font-bold",
      head_cell: "w-12 h-12",
    },
  };

  return (
    <main className="flex flex-col items-center max-h-screen min-w-screen gap-4 pt-16 px-6 text-white bg-zinc-700 relative overflow-hidden">
      <Title title="연차 신청" />

      <Undo2
        onClick={async () => {
          await Haptics.impact({ style: ImpactStyle.Medium });
          onOpen("caution");
        }}
        className="absolute top-[7.5%] right-6 h-8 w-8 bg-white rounded-full p-1 text-zinc-700 z-50"
      />

      <Swiper
        ref={swiperRef}
        className="h-screen w-full"
        allowTouchMove={false}
      >
        <SwiperSlide>
          <SlideDown>
            <div className="text-zinc-200 my-2 text-xl font-bold">연차 유형을 선택 해 주세요.</div>

            <motion.div className="mt-24">
              <motion.button
                onClick={() => {
                  swiperRef.current.swiper.slideNext();
                  setCalendarMode("range");
                }}
                className=" flex-1 py-4 text-xl w-full bg-emerald-400 text-white rounded-2xl relative"
              >
                <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
                연차
              </motion.button>
              <motion.button
                onClick={async () => {
                  swiperRef.current.swiper.slideNext();
                  setCalendarMode("single");
                }}
                className="flex-1 py-4 text-xl w-full mt-8 bg-emerald-400 text-white rounded-2xl relative"
              >
                <CalendarClock className="absolute left-4 top-1/2 -translate-y-1/2" />
                반차
              </motion.button>
            </motion.div>
          </SlideDown>
        </SwiperSlide>

        <SwiperSlide>
          <SlideDown>
            <div className="text-zinc-200 my-2 text-xl font-bold">신청할 날짜를 선택 해 주세요.</div>
          </SlideDown>

          <SlideDown delay={0.3}>
            {calendarMode === "range" ? (
              <Calendar
                {...calendarProps}
                mode="range"
                selected={range}
                onSelect={setRange}
              />
            ) : (
              <Calendar
                {...calendarProps}
                mode="single"
                selected={range.to}
                onSelect={(e) => {
                  setRange({
                    from: e,
                    to: e,
                  });
                }}
              />
            )}
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
          if (swiperRef.current.swiper.activeIndex === 2) {
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
        {currentPage === 2 ? "연차 신청" : "다음"}
      </motion.button>
    </main>
  );
};

export default VacationRequestPage;
