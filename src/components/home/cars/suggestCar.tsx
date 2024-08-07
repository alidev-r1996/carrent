"use client"

import { CarCardProps } from "@/lib/definitions";
import CarList from "./recent";
import { useAppSelector } from "@/redux/hook";
import { FC } from "react";


const SuggestCarList: FC = () => {
  const carsData: CarCardProps[] = useAppSelector((state)=>state.car.car)


  return (
    <>
      <CarList title="Recent Car" cars={carsData.filter((i) => i.recent)} />
      <CarList
        title="Recommendation Car"
        cars={carsData.filter((i) => i.recommend)}
      />
    </>
  );
};

export default SuggestCarList;
