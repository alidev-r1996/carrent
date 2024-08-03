"use client";

import { BiLogoGmail, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const parentVariable = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
}

const childVairable = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
    tap: {scale: 0.7},
    hover: {scale: 1.08, transition:{duration: 0.3}}
};




const SocialLogin = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div variants={parentVariable} initial="hidden" animate='show' key="social" className="flex items-center gap-2">
        <motion.p variants={childVairable} whileHover='hover' whileTap='tap' className="p-1.5 text-rose-500 flex place-content-center rounded-full dark:bg-slate-900/80 bg-transparent w-8 h-8 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:bg-rose-500 hover:text-white hover:scale-110 cursor-pointer">
          <BiLogoGmail className="w-full h-full" />
        </motion.p>
        <motion.p variants={childVairable} whileHover='hover' whileTap='tap' className="p-1 text-blue-800 flex place-content-center rounded-full dark:bg-slate-900/80 bg-transparent w-8 h-8 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:bg-blue-800 hover:text-white hover:scale-110 cursor-pointer">
          <BiLogoFacebook className="w-full h-full" />
        </motion.p>
        <motion.p variants={childVairable} whileHover='hover' whileTap='tap' className="p-1.5 text-sky-500 flex place-content-center rounded-full dark:bg-slate-900/80 bg-transparent w-8 h-8 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:bg-sky-500 hover:text-white hover:scale-110 cursor-pointer">
          <BiLogoTwitter className="w-full h-full" />
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialLogin;
