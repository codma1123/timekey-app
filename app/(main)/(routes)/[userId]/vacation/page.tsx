import VacationBar from "@/app/(main)/(routes)/[userId]/vacation/(component)/vacation-bar";
import VacationList from "@/app/(main)/(routes)/[userId]/vacation/(component)/vacation-list";
import VacationRequest from "@/app/(main)/(routes)/[userId]/vacation/(component)/vacation-request";

import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CalendarIcon } from "@radix-ui/react-icons";
import TopLabel from "@/components/ui/top-label";

const VacationPage = async ({ params }: { params: { userId: number } }) => {
  const date = 5;

  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 text-white bg-zinc-700 relative">
      <TopLabel
        scrolledClassName="bg-white top-0"
        titleClassName="text-zinc-200"
        label="연차"
      />

      <SlideDown>
        <VacationBar date={date} />

        <Alert className="w-full text-white bg-zinc-600 ring-0 border-0 mt-4 rounded-2xl">
          <AlertDescription className="pr-2">
            <div className="flex w-full items-center">
              <CalendarIcon className="h-4 w-4" />
              <span className="ml-2">잔여 연차</span>
              <span className="ml-auto text-2xl">{date}</span>
            </div>
          </AlertDescription>
        </Alert>

        <VacationRequest />
      </SlideDown>

      <div className="text-xl w-full text-white font-bold mt-4">연차 내역</div>

      <VacationList userId={params.userId} />
    </main>
  );
};

export default VacationPage;
