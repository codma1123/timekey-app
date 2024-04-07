"use client";

import { MonitorCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const DonePage = ({ params }: { params: { userId: UUID; id: UUID } }) => {
  const { userId } = params;

  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <div className="w-1/2 rounded-2xl aspect-square flex items-center justify-center mt-6">
        <MonitorCheckIcon className=" w-1/2 h-1/2 aspect-square" />
      </div>

      <span className="text-2xl font-extrabold">요청이 완료되었습니다.</span>

      <button
        className="w-full bg-emerald-400 rounded-2xl text-xl py-4 mt-6"
        onClick={() => {
          router.replace(`/${userId}/reports`);
        }}
      >
        홈 화면으로
      </button>
    </div>
  );
};

export default DonePage;
