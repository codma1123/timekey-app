import WorkHealthyChart from "@/app/(main)/(routes)/[userId]/reports/(routes)/work-healthy/(component)/work-healthy-chart";
import SlideDown from "@/components/motions/slide-down";
import { Alert, AlertDescription } from "@/components/ui/alert";
import BackButton from "@/components/ui/back-button";

const WorkHealthy = () => {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <BackButton />
      <SlideDown className="text-3xl font-bold mt-3">근무 건전도</SlideDown>

      <WorkHealthyChart rate={93} />

      <div className="w-full my-4 px-2">
        <div>현재 근무 건전도는 매우 건강합니다.</div>
        <div>근무 건전도를 올리는 방법이 뭔가요?</div>
      </div>

      <SlideDown>
        <div className="text-xl w-full text-white font-bold mt-2 ">근무 건전도 올리기</div>
      </SlideDown>

      <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
        <AlertDescription className="pr-2 flex items-center h-full">지각 횟수 줄이기</AlertDescription>
      </Alert>

      <Alert className="border-0 bg-content rounded-2xl h-16 mt-4">
        <AlertDescription className="pr-2 flex items-center h-full">~~~ 하기</AlertDescription>
      </Alert>
    </div>
  );
};

export default WorkHealthy;
