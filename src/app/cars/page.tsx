import Filter from "@/components/cars/filter";
import BreadCrump from "@/common/breadcrump";
import { Suspense } from "react";
import AllCars from "@/components/cars/allcars";

export const dynamic = 'force-dynamic'
const Page = async () => {
 
  return (
    <div className="p-4 w-full ">
      <BreadCrump current="Cars"/>
      <Filter />
      <Suspense fallback={<div></div>}>
        <AllCars />
      </Suspense>
    </div>
  );
};

export default Page;
