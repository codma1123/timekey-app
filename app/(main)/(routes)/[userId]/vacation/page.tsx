"use client";

import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { useScroll } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import { RocketIcon, CalendarIcon, PlusCircledIcon } from "@radix-ui/react-icons";

const VacationPage = () => {
  const date = 5;

  const { height, scrollToTop } = useScroll();

  const scrolled = height > 20;

  return (
    <>
      <div
        className={cn("fixed top-[-112px] w-full h-28 z-10 transition-all duration-200 rounded-bl-xl rounded-br-xl", scrolled && "bg-primary-dark top-0 block")}
        onClick={scrollToTop}
        onTouchStart={scrollToTop}
      ></div>
      <Title
        className={cn("text-zinc-200 sticky top-10 z-10 transition-all duration-150", scrolled && "top-12 text-2xl")}
        title="연차"
      />

      <SlideDown className="w-full">
        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
          <AlertDescription className="flex w-full items-center">
            <CalendarIcon className="h-4 w-4" />
            <span className="ml-2">다음 연차까지</span>
            <span className="ml-auto mr-2 font-bold text-2xl">D-{date}</span>
          </AlertDescription>
        </Alert>
        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0 mt-4">
          <AlertDescription className="flex w-full items-center">
            <CalendarIcon className="h-4 w-4" />
            <span className="ml-2">잔여 연차</span>
            <span className="ml-auto mr-2 font-bold text-2xl">{date}</span>
          </AlertDescription>
        </Alert>
      </SlideDown>

      <Button
        variant="link"
        className="self-end text-white mt-0"
      >
        자세히
      </Button>

      <Button
        className="text-white active:bg-zinc-600 transition-all duration-600 text-xl w-full h-14"
        variant="ghost"
      >
        <PlusCircledIcon className="h-6 w-6 mr-2" />
        연차 신청
      </Button>

      <div className="w-full text-white mt-4">
        <div className="text-xl">연차 내역</div>
      </div>

      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
      <Alert className="w-full text-white bg-zinc-600 ring-0 border-0">
        <AlertDescription className="flex w-full items-center">
          <CalendarIcon className="h-4 w-4" />
        </AlertDescription>
      </Alert>
    </>
  );
};

export default VacationPage;
