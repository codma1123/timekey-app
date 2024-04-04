"use client";

import { useRouter } from "next/navigation";

const DonePage = ({ params }: { params: { userId: UUID; id: UUID } }) => {
  const { userId, id: reportId } = params;

  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen gap-4 pt-16 px-6 pb-24 text-white bg-overtime">
      <button
        onClick={() => {
          router.replace(`/${userId}/reports`);
        }}
      >
        홈으로
      </button>
    </div>
  );
};

export default DonePage;
