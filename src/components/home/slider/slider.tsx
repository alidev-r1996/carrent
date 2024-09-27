"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sliderImg = ["/main-slider.jpg", "/02-02.png", "/02-03.png"];

const Slider = () => {
  const [slider, setSlider] = useState(0);
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={"slider"}
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.4}}
        className="md:col-span-6 col-span-12 bg-header  flex flex-col gap-2 rounded"
      >
        <div className="flex flex-col gap-3 bg-slate-700 p-4 rounded">
          <h1 className="font-bold text-white dark:text-slate-100 text-xl text-shadow">
            Sports car with the best design and acceleration
          </h1>
          <h4 className="text-white dark:text-slate-300 text-xs text-shadow">
            Safety and comfort while driving a futuristic and elegant sports car
          </h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            key={slider}
            className="max-w-full h-60 relative rounded overflow-hidden shadow"
          >
            <Image src={sliderImg[slider]} alt="" fill className="object-fit aspect-square" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"/>
          </motion.div>
        </div>
        <div className="flex items-center gap-2">
          {sliderImg.map((src, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                key={i}
                onClick={() => setSlider(i)}
                className={`w-1/3 bg-slate-600 h-20 rounded overflow-hidden cursor-pointer relative ${
                  slider == i && "ring-2 ring-slate-800 ring-offset-2"
                }`}
              >
                <Image src={src} alt="" fill className="object-fit" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Slider;
