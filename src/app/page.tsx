import Review from "@/components/home/Reviews/review";
import CarList from "@/components/home/cars/recent";
import Detail from "@/components/home/details/detail";
import Slider from "@/components/home/slider/slider";
import { fetchCar } from "./fetch";
import { CarCardProps } from "../lib/definitions";

const Home = async () => {
  const carsData: CarCardProps[] = await fetchCar();

  return (
    <div className="grid grid-cols-12 p-4 gap-4 ">
      <Slider />
      <Detail />
      <Review />
      <CarList title="Recent Car" cars={carsData.filter((i) => i.recent)} />
      <CarList
        title="Recommendation Car"
        cars={carsData.filter((i) => i.recommend)}
      />
    </div>
  );
};

export default Home;
