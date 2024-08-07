import BreadCrump from "@/common/breadcrump";
import Favorites from "@/components/favorites/favorites";
import Result from "@/components/search/result";
import { Suspense } from "react";


export const dynamic = 'force-dynamic'

const SearchResult = async () => {
  return (
    <div className="p-4 w-full">
      <BreadCrump current="Result" />
      <h1 className="font-bold p-4 text-slate-500">Search Result</h1>
        <Result />
    </div>
  );
};

export default SearchResult;
