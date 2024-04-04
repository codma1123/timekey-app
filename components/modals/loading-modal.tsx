"use client";

import { Comment } from "react-loader-spinner";
import { useGlobalLoading } from "@/store/global-loading";

const LoadingModal = () => {
  const loading = useGlobalLoading(state => state.loading);

  return (
    <>
      {loading && (
        <div className="fixed z-[100] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-950 opacity-75"></div>
            </div>

            <div className="bg-none transform transition-all">
              <Comment
                visible={loading}
                height="105"
                width="105"
                ariaLabel="comment-loading"
                wrapperClass=""
                color="#fff"
                backgroundColor="#F4D878"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingModal;
