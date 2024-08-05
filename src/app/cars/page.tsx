import Filter from "@/components/cars/filter";
import CarCard from "@/components/home/cars/carcard";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { fetchCar } from "../fetch";
import { CarCardProps } from "../../lib/definitions";
import BreadCrump from "@/common/breadcrump";
import { Suspense } from "react";
import AllCars from "@/components/cars/allcars";


const Page = async () => {
 
  return (
    <div className="p-4 w-full ">
      <BreadCrump current="Cars"/>
      <Filter />
      <Suspense>
        <AllCars />
      </Suspense>
    </div>
  );
};

export default Page;
