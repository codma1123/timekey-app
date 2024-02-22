import { Skeleton } from "@/components/ui/skeleton";
import Title from "@/components/ui/title";

const Loading = () => {
  return (
    <>
      <div className={"py-4 text-5xl flex items-center gap-[10px] w-full font-bold text-zinc-200"}>연차</div>

      <Skeleton className="h-16 w-full mt-[13px] rounded-2xl bg-zinc-600" />
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />

      <div className="text-xl w-full text-white font-bold mt-4">연차 내역</div>
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />
      <Skeleton className="h-16 w-full rounded-2xl bg-zinc-600" />
    </>
  );
};

export default Loading;
