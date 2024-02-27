import { Skeleton } from "@/components/ui/skeleton";

const ReportLoading = () => {
  return (
    <main className="flex flex-col items-center h-screen min-w-screen gap-4 pt-16 px-6">
      <div className="py-4 text-5xl w-full font-bold text-white">근무 기록</div>

      <Skeleton className="h-6 w-16 self-start mt-2 rounded-2xl bg-content" />

      <Skeleton className="h-16 w-full mt-[13px] rounded-2xl bg-content" />
      <Skeleton className="h-16 w-full rounded-2xl bg-content" />
      <Skeleton className="h-16 w-full rounded-2xl bg-content" />
    </main>
  );
};

export default ReportLoading;
