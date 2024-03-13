"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import ReactPullToRefresh from "react-pull-to-refresh";

const PullToRefresh = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const refresh = (async () => {
    router.refresh();
  }) as () => Promise<void>;

  return (
    <ReactPullToRefresh
      loading={
        <div className="loading mt-16">
          <span className="z-[100] loading-ptr-1 bg-white text-rose-400"></span>
          <span className="z-[100] loading-ptr-2 bg-white text-rose-400"></span>
          <span className="z-[100] loading-ptr-3 bg-white text-rose-400"></span>
        </div>
      }
      onRefresh={refresh}
    >
      {children}
    </ReactPullToRefresh>
  );
};

export default PullToRefresh;
