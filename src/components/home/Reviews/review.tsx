"use client";

import { motion, AnimatePresence } from "framer-motion";
import ReviewComment from "./comment";

const comments = [
  {
    id: 1,
    avatar: "/t-avt-2.png",
    author: "Alex Stanton",
    expertise: "CEO at Bukalapak",
    date: "21 July 2022",
    rate: 4,
    text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: 2,
    avatar: "/t-avt-3.png",
    author: "Skylar Dias",
    expertise: "CEO at Amazon",
    date: "20 July 2022",
    rate: 4,
    text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];

const parentVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
      delay: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  hover: {
    transition: { ease: "easeOut", type: "spring", damping: 17, duration: 0.2 },
  },
};

const Review = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key="review"
        className="col-span-12 p-4 bg-header rounded shadow flex flex-col gap-4"
      >
        <motion.div
          variants={childVariants}
          className="flex items-center gap-2"
        >
          <h1 className="font-bold text-lg dark:text-white">Reviews</h1>
          <p className="px-2 py-0.5 rounded text-xs text-white bg-blue-500">
            13
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
        {comments.map((i) => {
          return (
            <motion.div
              variants={childVariants}
              key={i.id}
              className="flex items-start gap-2 "
            >
              <ReviewComment comment={i} />
            </motion.div>
          );
        })}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Review;
