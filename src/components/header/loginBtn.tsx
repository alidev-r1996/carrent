"use client";

import { signoutUser } from "@/redux/feature/fakeDataActions";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const LoginBtn = () => {
  const user = useAppSelector((state) => state.car.user?.email);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  return (
    <Link
      onClick={() => setShow(user ? !show : show)}
      href={user ? "/" : "/login"}
      className={` sm:w-8 sm:h-8 w-7 h-7 relative ${
        show ? "bg-blue-600 text-white hover:dark:bg-blue-600" : "text-icon"
      } hover:dark:bg-slate-700 md:block shadow-[1x_1px_5px_rgba(0,0,0,0.15)] dark:shadow-[1px_1px_5px_rgba(0,0,0,0.5),-1px_-1px_5px_rgba(0,0,0,0.5)] p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:scale-110`}
    >
      <UserIcon className="w-full h-full " />

      {show && (
        <button
          onClick={() => dispatch(signoutUser())}
          className="rounded bg-blue-600 transition-all duration-300 text-white text-[11px] absolute -bottom-10 -right-2 px-2 py-1 "
        >
          Logout
        </button>
      )}
    </Link>
  );
};

export default LoginBtn;
