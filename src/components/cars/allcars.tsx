import { CarCardProps } from "@/lib/definitions";
import CarCard from "../home/cars/carcard";
import { fetchCar } from "@/app/fetch";

const AllCars = async () => {
  const carsData: CarCardProps[] = await fetchCar();
  return (
    <div className="containerBlur grid grid-cols-1 sm-[min-width:460px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      {carsData.map((car) => {
        return <CarCard {...car} key={car.id} />;
      })}
    </div>
  );
};

export default AllCars;
