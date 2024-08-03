"use client";

import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, MouseEvent, useState } from "react";

const Filter = () => {
  const [pickup, setPickup] = useState({
    location: "",
    date: "",
    time: "",
  });

  const [dropoff, setDropoff] = useState({
    location: "",
    date: "",
    time: "",
  });

  const pickupHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPickup({ ...pickup, [name]: [value] });
  };

  const dropoffHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDropoff({ ...pickup, [name]: [value] });
  };

  const swapHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 items-center">
      <div className="bg-header flex-1 flex flex-col gap-10 rounded shadow p-2 w-full">
        <h2 className="font-bold p-2 text-white text-center bg-blue-500 rounded shadow-[0_0_3px_rgb(59,130,246)]">
          Pick-Up
        </h2>
        <div className="flex items-center text-sm">
          <div className="flex flex-1 items-center justify-center border-r border-r-slate-200 flex-col">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Location</h3>
            <input
              type="text"
              name="location"
              id="location"
              value={pickup.location}
              onChange={pickupHandler}
              placeholder="select city"
              className="w-full text-[9px] py-0.5 text-center focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
            />
          </div>
          <div className="flex flex-1 items-center justify-center border-r border-r-slate-200 flex-col">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Date</h3>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full text-[9px] text-center py-0.5 focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
              value={pickup.date}
              onChange={pickupHandler}
            />
          </div>
          <div className="flex flex-1 items-center justify-center flex-col gap-1">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Time</h3>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full text-[9px] text-center py-0.5 focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
              value={pickup.time}
              onChange={pickupHandler}
            />
          </div>
        </div>
      </div>
      <button
        onClick={swapHandler}
        className="p-1 w-8 h-8 rounded bg-blue-500 cursor-pointer shadow-[0_0_3px_rgb(59,130,246)] text-white sm:rotate-90"
      >
        <ArrowsUpDownIcon className="w-full h-full" />
      </button>
      <div className="bg-header flex-1 flex flex-col gap-10 rounded shadow p-2 w-full">
        <h2 className="font-bold p-2 text-white text-center bg-emerald-600 rounded shadow-[0_0_3px_rgb(5,150,105)]">
          Drop-Off
        </h2>
        <div className="flex items-center text-sm">
          <div className="flex flex-1 items-center justify-center border-r border-r-slate-200 flex-col">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Location</h3>
            <input
              type="text"
              name="location"
              id="location"
              value={dropoff.location}
              onChange={dropoffHandler}
              placeholder="select city"
              className="w-full text-[9px] py-0.5 text-center focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
            />
          </div>
          <div className="flex flex-1 items-center justify-center border-r border-r-slate-200 flex-col">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Date</h3>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full text-[9px] text-center py-0.5 focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
              value={dropoff.date}
              onChange={dropoffHandler}
            />
          </div>
          <div className="flex flex-1 items-center justify-center flex-col gap-1">
            <h3 className="font-bold text-slate-500 dark:text-slate-300">Time</h3>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full text-[9px] text-center py-0.5 focus:ring-0 focus:outline-none border-none  bg-transparent text-slate-500 dark:text-slate-300 outline-none "
              value={dropoff.time}
              onChange={dropoffHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
