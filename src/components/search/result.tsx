"use client";

import CarCard from "../home/cars/carcard";
import { useAppSelector } from "@/redux/hook";
import Loading from "@/app/loading";

const Result = () => {
  const { loading, error, car, user, filterCar } = useAppSelector((state) => state.car);
  

  if (loading) return <Loading />;

  if (filterCar?.length == 0) return (
    <div className="h-[38vh] w-full bg-white dark:bg-slate-800 rounded shadow p-4">
      <p>sorry, Your Search Result not founded!</p>
    </div>
  );

  return (
    <div className="containerBlur grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-y-12 mb-8">
      {filterCar?.map((car) => {
        return <CarCard {...car} key={car.id} />;
      })}
    </div>
  );
};

export default Result;
