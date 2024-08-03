"use client";

import Link from "next/link";
import CarCard from "./carcard";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";
import {CarListProps } from "@/lib/definitions";


const CarList: FC<CarListProps> = ({ title, cars }) => {
  return (
    <AnimatePresence mode="wait">
      <section key="card" className="col-span-12">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-between mt-4"
        >
          <h1 className="text-slate-400 text-sm ">{title}</h1>
          <Link
            href="/cars"
            className="text-blue-400 text-xs hover:text-blue-600 hover:underline transition-all duration-200 cursor-pointer"
          >
            View All
          </Link>
        </motion.div>
        <div className="containerBlur flex items-center overflow-x-scroll gap-4 scrollbar-none py-4">
          {cars.map((car) => {
            return <CarCard key={car.id} {...car} />;
          })}
        </div>
      </section>
    </AnimatePresence>
  );
};

export default CarList;
