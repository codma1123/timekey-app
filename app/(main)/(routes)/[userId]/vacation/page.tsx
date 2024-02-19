"use client";

import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TopLabel from "@/components/ui/top-label";
import { useAuthStore } from "@/store/auth";
import { RocketIcon, CalendarIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const VacationPage = () => {
  const router = useRouter();
  const { id } = useAuthStore();

  const date = 5;

  return (
    <>
      <TopLabel
        scrolledClassName="bg-primary-dark top-0 block"
        titleClassName="text-zinc-200"
        label="연차"
      />

      <SlideDown>
        <div className="flex gap-x-2 text-2xl">
          <div className="ml-auto text-zinc-200 font-bold">연차정보</div>
          <div className=" text-zinc-500">반차정보</div>
        </div>

        <Separator className="my-4" />

        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0 mt-4">
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

      <SlideDown delay={0.3}>
        <Button
          className="text-white active:bg-zinc-600 transition-all duration-600 text-xl w-full h-14"
          variant="ghost"
          onClick={() => router.push(`/${id}/vacation/request`)}
        >
          <PlusCircledIcon className="h-6 w-6 mr-2" />
          연차 신청
        </Button>
      </SlideDown>

      <SlideDown
        className="flex flex-col gap-4"
        delay={0.4}
      >
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
      </SlideDown>
    </>
  );
};

export default VacationPage;
