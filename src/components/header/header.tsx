import { Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import Search from "./Search";
import DarkMode from "@/common/darkmode";
import Link from "next/link";
import LoginBtn from "./loginBtn";

const Header = () => {
  return (
    <nav className=" md:p-6 sticky top-0 z-50 backdrop-blur-lg shadow-[1px_1px_2px_rgba(0,0,0,0.1)] p-4 flex flex-row md:flex-row-reverse items-center justify-between flex-wrap gap-y-2 dark:shadow-[0px_2px_4px_rgba(0,0,0,1)] bg-header/90">
      <Bars3Icon className="w-6 h-6 text-icon md:hidden cursor-pointer" />
      <div className="flex items-center gap-2 md:gap-3 w-2/3 md:w-max justify-end ">
        <Link
          href={"/favorite"}
          className={` sm:w-8 sm:h-8 w-7 h-7 md:block  shadow-[1px_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)] p-2 rounded-full cursor-pointer hover:dark:bg-slate-700 transition-all duration-200 hover:scale-110`}
        >
          <HeartIcon className="w-full h-full  text-icon " />
        </Link>
        <DarkMode />
        <LoginBtn />
      </div>
      <div className="flex flex-wrap gap-y-2 items-center md:gap-4 flex-1">
        <h1 className="md:text-3xl text-2xl font-bold mt-3 sm:mt-0 text-blue-600 w-full sm:w-max">
          MORENT
        </h1>
        <Search />
      </div>
    </nav>
  );
};

export default Header;
