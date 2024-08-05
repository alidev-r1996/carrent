"use client";

import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="fixed z-[100] top-0 left-0 h-screen w-screen bg-slate-800/50 backdrop-blur-[2px]"></div>
      <div className="fixed z-[200] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/3 h-max p-4 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <div className="relative w-full h-40">
          <Image src="/login.jpg" alt="" fill />
        </div>
        <div className="w-full flex items-center justify-center">
          <InfinitySpin width="200" color="#0d6d55" />
        </div>
      </div>
    </>
  );
};

export default Loading;
