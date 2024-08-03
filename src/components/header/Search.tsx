"use client";

import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "./sidebar/sidebar";

const Search = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearch(value);
    params.set("search", params.toString());
    router.push(pathname + "?" + params.toString());
    if (value == "" || value == " ") {
      params.delete("search");
      router.push(pathname);
    }
  };

  return (
    <div className="flex gap-2 items-center justify-between w-full md:w-max">
      <div className="flex gap-2 flex-1 items-center rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)]  p-1 md:p-2">
        <MagnifyingGlassIcon className="w-4 h-4 md:w-5 md:h-5 text-icon" />
        <input
          type="text"
          name="search"
          id="serach"
          value={search}
          onChange={searchHandler}
          placeholder="Search Something here"
          className="text-[10px] py-0.5 md:p-0 md:text-xs bg-transparent border-none  focus:outline-none focus:ring-0 flex-1 outline-none"
        />
      </div>
      <p
        onClick={() => setShow(!show)}
        className="flex hover:bg-gray-100 transition-all duration-200 cursor-pointer hover:dark:bg-slate-700 items-center justify-center rounded-[10px] shadow-[1px_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)] p-2"
      >
        <AdjustmentsHorizontalIcon className="w-5 h-5 text-icon" />
      </p>
      {show && <Sidebar key="sidebar" onClose={() => setShow(!show)} />}
    </div>
  );
};

export default Search;
