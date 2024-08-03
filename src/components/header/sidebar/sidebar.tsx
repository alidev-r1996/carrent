"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";
import SideOption from "./sidebaroption";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}$`;
}

const sideFilter = {
  type: [
    {
      title: "sport",
      quantity: 10,
    },
    {
      title: "suv",
      quantity: 12,
    },
    {
      title: "mpv",
      quantity: 16,
    },
    {
      title: "sedan",
      quantity: 20,
    },
    {
      title: "coupe",
      quantity: 14,
    },
    {
      title: "hatchback",
      quantity: 14,
    },
  ],
  capacity: [
    {
      title: "2Person",
      quantity: 11,
    },
    {
      title: "4Person",
      quantity: 14,
    },
    {
      title: "6Person",
      quantity: 12,
    },
    {
      title: "8ormore",
      quantity: 16,
    },
  ],
};

const parentVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      staggerChildren: 0.3,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      type: "spring",
      damping: 17,
      duration: 0.2,
    },
  },
};

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [cartype, setCarType] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([20, 37]);

  const typeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name, value } = e.target;
    if (checked) {
      setCarType((prev: typeof cartype) => {
        let carType = [...prev, value];
        return carType;
      });
    } else {
      setCarType((prev: typeof cartype) => {
        let carType = [...prev].filter((i) => i != value);
        return carType;
      });
    }
  };

  const capacityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name, value } = e.target;
    if (checked) {
      setCapacity((prev: typeof capacity) => {
        let capacityType = [...prev, value];
        return capacityType;
      });
    } else {
      setCapacity((prev: typeof capacity) => {
        let capacityType = [...prev].filter((i) => i != value);
        return capacityType;
      });
    }
  };

  const PriceHandler = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const carFilter = () => {
    cartype.length && params.set("type", cartype.toString());
    capacity.length && params.set("capacity", capacity.toString());
    router.push(pathname + "?" + params.toString());
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-slate-600/30 backdrop-blur-[2px] z-40"
      ></div>
      <motion.aside
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="fixed z-50  w-full md:w-1/4 flex flex-wrap sm:flex-nowrap  gap-x-4 md:gap-4  md:justify-normal flex-row md:flex-col bg-header left-0 top-0 shadow-sm p-4  h-screen"
      >
        <button className="w-full flex justify-end p-1 h-12 transition-all duration-200 ">
          <XMarkIcon
            onClick={onClose}
            className="w-5 h-5 hover:bg-rose-600 dark:text-white hover:text-white rounded cursor-pointer"
          />
        </button>
        <SideOption
          title="type"
          options={sideFilter.type}
          Handler={typeHandler}
        />
        <SideOption
          title="capacity"
          options={sideFilter.capacity}
          Handler={capacityHandler}
        />
        <div className="flex flex-col relative text-xs pl-3 w-full">
          <h1 className="text-[sm] -ml-3 text-slate-400 mb-3  uppercase">
            Price
          </h1>
          <Box sx={{ width: 150 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={price}
              onChange={PriceHandler}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </div>
        <button
          onClick={carFilter}
          className="border border-blue-600 h-max shadow-[1px_1px_5px_rgba(37,99,235,0.5)] px-4 text-xs rounded py-2  transition-all duration-300 cursor-pointer bg-blue-500 hover:border-none text-white"
        >
          apply
        </button>
      </motion.aside>
    </>
  );
};

export default Sidebar;
