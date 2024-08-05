import { CarCardProps } from "@/lib/definitions";
import CarList from "./recent";
import { fetchCar } from "@/app/fetch";
import cars from "@/app/api/Data";

export const dynamic = 'force-dynamic'

const SuggestCarList = async () => {
//   const carsData: CarCardProps[] = await fetchCar();
  const carsData= cars
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
