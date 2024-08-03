import CarCard from "@/components/home/cars/carcard";
import { fetchCar } from "../fetch";
import { CarCardProps } from "../../lib/definitions";
import BreadCrump from "@/common/breadcrump";

const Page = async () => {
  const carsData: CarCardProps[] = await fetchCar();
  return (
    <div className="p-4 w-full">
      <BreadCrump current="Favorites"/>
      <h1 className="font-bold p-4 text-slate-500">Favorites Car</h1>
      <div className="containerBlur grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-y-12 mb-8">
        {carsData
          .filter((i) => i.isLike)
          .map((car) => {
            return <CarCard {...car} />;
          })}
      </div>
    </div>
  );
};

export default Page;
