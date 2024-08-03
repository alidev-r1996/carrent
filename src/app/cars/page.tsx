import Filter from "@/components/cars/filter";
import CarCard from "@/components/home/cars/carcard";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { fetchCar } from "../fetch";
import { CarCardProps } from "../../lib/definitions";
import BreadCrump from "@/common/breadcrump";


const Page = async () => {
  const carsData: CarCardProps[] = await fetchCar();
  return (
    <div className="p-4 w-full ">
      <BreadCrump current="Cars"/>
      <Filter />
      <div className="containerBlur grid grid-cols-1 sm-[min-width:460px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {carsData.map((car) => {
          return <CarCard {...car} />;
        })}
      </div>
    </div>
  );
};

export default Page;
