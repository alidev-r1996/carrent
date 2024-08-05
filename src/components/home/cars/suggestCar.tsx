import { CarCardProps } from "@/lib/definitions";
import CarList from "./recent";
import { fetchCar } from "@/app/fetch";

const SuggestCarList = async () => {
  const carsData: CarCardProps[] = await fetchCar();

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
