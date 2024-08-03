"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState("light");

  const darkHandler = (mode: string) => {
    setDark(mode);
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark("dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {dark == "light" ? (
        <motion.button
          key="sun"
          //   initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => darkHandler("dark")}
          className={` sm:w-8 sm:h-8 w-7 h-7 hover:dark:bg-slate-700 md:blockshadow-[1px_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)] p-1 rounded-full cursor-pointer transition-all duration-200 hover:scale-110`}
        >
          <SunIcon className="w-full h-full  text-icon" />
        </motion.button>
      ) : (
        <motion.button
          //   initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => darkHandler("light")}
          className={` sm:w-8 sm:h-8 w-7 h-7 hover:dark:bg-slate-700 md:block shadow-[1px_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)] p-1 rounded-full cursor-pointer transition-all duration-200 hover:scale-110`}
        >
          <MoonIcon className="w-full h-full  text-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default DarkMode;
