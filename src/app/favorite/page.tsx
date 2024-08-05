import CarCard from "@/components/home/cars/carcard";
import { fetchCar } from "../fetch";
import { CarCardProps } from "../../lib/definitions";
import BreadCrump from "@/common/breadcrump";
import Favorites from "@/components/favorites/favorites";
import { Suspense } from "react";

const Page = async () => {
  return (
    <div className="p-4 w-full">
      <BreadCrump current="Favorites" />
      <h1 className="font-bold p-4 text-slate-500">Favorites Car</h1>
      <Suspense>
        <Favorites />
      </Suspense>
    </div>
  );
};

export default Page;
