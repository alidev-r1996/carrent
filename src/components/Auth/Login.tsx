"use client";

import Image from "next/image";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputText from "@/common/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import SocialLogin from "./SocialLogin";
import { LoginPrps, formFields } from "@/lib/definitions";
import { LoginSchema } from "@/constants/constant";

const Login: FC<LoginPrps> = ({ setStep, step }) => {
  const { register, formState, handleSubmit } = useForm<formFields>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<formFields> = (values: formFields) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col md:flex-row items-center rounded justify-center w-full md:w-2/3 mx-auto h-max p-4">
      <motion.div
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: "100%" }}
        className="md:w-1/2 w-full bg-white dark:bg-slate-800 shadow rounded-tl rounded-bl h-max flex flex-col items-center"
      >
        <h1 className="font-bold dark:text-white tracking-wide text-2xl text-slate-800 mx-auto my-8">
          LOGIN
        </h1>
        <SocialLogin />
        <p className="mt-8 border-b p-1 border-b-slate-200 text-[10px] text-slate-500">
          or user your account
        </p>
        <form
          onClick={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-[10px] mt-8"
        >
          <InputText
            register={register}
            name="email"
            type="text"
            formState={formState}
            label="email"
          >
            <FaEnvelope className="w-full h-full" />
          </InputText>

          <InputText
            register={register}
            name="password"
            type="text"
            formState={formState}
            label="password"
          >
            <FaLock className="w-full h-full" />
          </InputText>
          <button className="text-white bg-slate-900 rounded text-xs py-2 mt-3 transition-all duration-200 hover:shadow-[0_0_4px_rgba(0,0,0,0.8)]">
            LOGIN
          </button>
          <p className="text-[10px] mb-4  text-slate-500 hover:text-slate-800 text-center cursor-pointer transition-all duration-200">
            forget your password?
          </p>
          <p
            onClick={() => setStep(!step)}
            className="text-[10px] -mt-5 mb-4 md:hidden text-slate-500 hover:text-slate-800 text-center cursor-pointer transition-all duration-200"
          >
            need to signup?
          </p>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: "-100%" }}
        className="w-1/2 hidden h-[403px]  relative bg-white shadow rounded-tl rounded-bl  md:flex flex-col items-center"
      >
        <h1 className="font-bold text-3xl drop-shadow-[0_0_4px_rgba(0,0,0,0.4)] text-white absolute top-10 z-10">
          Welcome!
        </h1>
        <p className="absolute bottom-20 z-10 text-white text-xs">
          don't have an account?{" "}
        </p>
        <button
          onClick={() => setStep(!step)}
          className="text-white  absolute px-2 z-10 bottom-10 bg-slate-900 rounded text-[10px] py-2 mt-3 transition-all duration-200 hover:shadow-[0_0_4px_rgba(0,0,0,0.8)]"
        >
          SIGNUP
        </button>
        <Image src="/login.jpg" alt="" fill className="object-fill" />
      </motion.div>
    </div>
  );
};

export default Login;
