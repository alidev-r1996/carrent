"use client";

import Rating from "@/common/Rating";
import TableUi from "@/common/Table";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      //   delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: {
    marginRight: "5px",
    transition: { ease: "easeOut" },
  },
};

const Detail = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        key={"detail"}
        className="md:col-span-6 p-4 col-span-12 bg-header  flex flex-col justify-between rounded"
      >
        <motion.div
          variants={childVariants}
          className="flex items-center justify-between w-full"
        >
          <h1 className="text-3xl font-semibold text-slate-800 dark:text-slate-200">Nissan GT - R</h1>
          <HeartIcon className="w-6 h-6 fill-red-600 stroke-transparent" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex items-center gap-8 mt-2"
        >
          <Rating rate={3} stars={5} size="md" />
          <p className="text-sm text-slate-500">440+ Reviewer</p>
        </motion.div>
        <motion.p
          variants={childVariants}
          className="md:text-sm text-xs text-slate-400 my-4"
        >
          NISMO has become the embodiment of Nissans outstanding performance,
          inspired by the most unforgiving proving ground, the race track.
        </motion.p>
        <motion.div variants={childVariants}>
          <TableUi
            theme="blue"
            fields={["typecart", "capacity", "steering", "gasolin"]}
          >
            <tr>
              {["Sport", "2Person", "Manual", "70L"].map((i, index) => {
                return (
                  <td
                    key={index}
                    className="p-2 text-xs bg-gray-50 border dark:bg-slate-100 dark:border-slate-300 text-center"
                  >
                    {i}
                  </td>
                );
              })}
            </tr>
          </TableUi>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex items-start justify-between w-full mt-8"
        >
          <div className="flex flex-wrap">
            <p className="text-xs text-slate-500">
              <strong className="text-lg text-slate-800 dark:text-slate-200">$80.00/</strong> days
            </p>
            <p className="text-slate-500 text-sm w-full line-through ">$100.00</p>
          </div>
          <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.2}} className="bg-blue-600 text-xs md:text-sm shadow-[1px_1px_5px_rgba(37,99,235,1)] whitespace-nowrap text-white text-bold py-2 px-4 rounded">
            Rent Now
          </motion.button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Detail;
