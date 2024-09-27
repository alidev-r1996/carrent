"use client";

import CarCard from "../home/cars/carcard";
import { CarCardProps } from "@/lib/definitions";
import { useAppSelector } from "@/redux/hook";
import Loading from "@/app/loading";


const Favorites = () => {
  const { loading, error, car, user } = useAppSelector((state) => state.car);
  const FavoritesCar: CarCardProps[] | null = car.filter((c) =>
    user?.isLike?.includes(c.id as string)
  );

  
  if (loading) return <Loading />;

  if (!user) return (window.location.href = "/login");

  if (FavoritesCar.length == 0)
    return (
      <div className="h-[60vh] w-full bg-white dark:bg-slate-800 rounded shadow p-4">
        <p>Your Favorites Car is Empty!</p>
      </div>
    );

  return (
    <div className="containerBlur grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-y-12 mb-8">
      {FavoritesCar.map((car) => {
        return <CarCard {...car} key={car.id} />;
      })}
    </div>
  );
};

export default Favorites;
