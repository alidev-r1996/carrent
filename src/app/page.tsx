import Review from "@/components/home/Reviews/review";
import Detail from "@/components/home/details/detail";
import Slider from "@/components/home/slider/slider";
import { Suspense } from "react";
import SuggestCarList from "@/components/home/cars/suggestCar";
import Loading from "./loading";

export const dynamic = 'force-dynamic'

const Home = async () => {
  
  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      <Slider />
      <Detail />
      <Review />
      <Suspense fallback={<div></div>}>
        <SuggestCarList />
      </Suspense>
    </div>
  );
};

export default Home;
