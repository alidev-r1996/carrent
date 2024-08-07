"use client";

import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGasPump, FaUserFriends } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { FC } from "react";
import { CarCardProps } from "@/lib/definitions";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToFavorites } from "@/redux/feature/fakeDataActions";

const CarCard: FC<CarCardProps> = ({
  id,
  name,
  type,
  img,
  fuel,
  steering,
  capacity,
  price,
  discount,
  isLike,
  recent,
  recommend,
}) => {
  const dispatch = useAppDispatch();
  const UserFavorites = useAppSelector(state =>state.car.user?.isLike)

  const likeHandler = async () => {
    await dispatch(addToFavorites(id as string));
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 52% 0 47%)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
        whileHover={{ scale: 1.05 }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          clipPath: { duration: 0.5, delay: 1 },
          scale: { duration: 0.2 },
        }}
        viewport={{ once: true }}
        className="childBlur transition-all h-max duration-300 rounded cursor-pointer shadow p-2 flex flex-col gap-2 text-sm bg-header justify-between w-full max-w-80 min-w-56 sm:min-w-60"
      >
        <div className="flex items-start justify-between p-2">
          <div className="flex flex-col gap-.5">
            <h2 className="font-bold dark:text-slate-200">{name}</h2>
            <p className="text-slate-400 text-[10px] dark:text-slate-300">
              {type}
            </p>
          </div>
          <p
            onClick={likeHandler}
            className={`w-5 h-5 ${
              UserFavorites?.includes(id as string) ? "text-rose-500" : "text-rose-50 dark:text-transparent"
            }`}
          >
            <HeartIcon className="w-full h-full hover:text-rose-500 transition-all duration-300 cursor-pointer stroke-rose-500 stroke-2 " />
          </p>
        </div>
        <motion.div
          // initial={{ x: -40 }}
          // whileInView={{ x: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-4/5 aspect-video p-4 mx-auto -mt-3"
        >
          <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </motion.div>
        <div className="flex items-center   justify-between p-2 sm:text-xs text-[10px]">
          <div className="flex items-center gap-1 text-slate-400">
            <FaGasPump className="w-4 h-4   stroke-2  " />
            <p>{fuel}</p>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <TbSteeringWheel className="w-4 h-4  stroke-2 " />
            <p>{steering}</p>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <FaUserFriends className="w-4 h-4  stroke-2" />
            <p>{capacity}</p>
          </div>
        </div>
        <div className="flex items-start justify-between p-2 ">
          <div className="flex flex-col">
            <p className="text-[10px] flex-1 text-slate-500">
              <strong className=" text-sm text-black dark:text-slate-200">
                ${price}/
              </strong>{" "}
              days
            </p>
            {discount && (
              <p className="text-slate-400 line-through text-xs w-full">
                ${discount}
              </p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-blue-600 md:text-xs whitespace-nowrap shadow-[1px_1px_5px_rgba(37,99,235,1)] text-white text-bold sm:py-2 sm:px-4 py-1 px-2 rounded"
          >
            Rent Now
          </motion.button>
        </div>
      </motion.div>{" "}
    </AnimatePresence>
  );
};

export default CarCard;
