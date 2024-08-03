import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BreadCrump = ({ current }: { current: string }) => {
  return (
    <div className="p-4 rounded text-slate-700 dark:text-slate-400 text-xs shadow bg-header flex items-center gap-2 w-full">
      <div className="flex items-center gap-1">
        <HomeIcon className="w-4 h-4" />
        <Link href={"/"}>Home</Link>
      </div>
      <p>
        <ChevronRightIcon className="w-4 h-4" />
      </p>
      <p className="font-bold">{current}</p>
    </div>
  );
};

export default BreadCrump;
