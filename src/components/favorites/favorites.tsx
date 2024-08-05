import { fetchCar } from "@/app/fetch";
import CarCard from "../home/cars/carcard";
import { CarCardProps } from "@/lib/definitions";
import cars from "@/app/api/Data";

export const dynamic = 'force-dynamic'
const Favorites = async() => {
    // const carsData: CarCardProps[] = await fetchCar();
    const carsData= cars
    return ( 
        <div className="containerBlur grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-y-12 mb-8">
        {carsData
          .filter((i) => i.isLike)
          .map((car) => {
            return <CarCard {...car} key={car.id}/>;
          })}
      </div>
     );
}
 
export default Favorites;