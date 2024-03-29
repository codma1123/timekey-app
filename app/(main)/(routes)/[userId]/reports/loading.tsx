import { Skeleton } from "@/components/ui/skeleton";

const ReportsLoading = () => {
  return (
    <main className="flex flex-col h-screen min-w-screen gap-4 pt-16 px-6 bg-overtime">
      <div className="py-4 text-5xl w-full font-bold text-white">근무 기록</div>
      <Skeleton className="h-16 w-full mt-[13px] rounded-2xl bg-content" />
      <Skeleton className="h-16 w-full rounded-2xl bg-content" />
      <Skeleton className="h-16 w-full rounded-2xl bg-content" />

      <Skeleton className="h-7 w-16 mt-2 rounded-2xl bg-content self-start" />
    </main>
  );
};

export default ReportsLoading;
