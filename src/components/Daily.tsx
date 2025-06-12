import { useQuery } from "@tanstack/react-query";
import { Cocktail_API } from "../types";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { getDataList } from "../lib/utils";

const Daily = () => {
  const { data, isPending } = useQuery({
    queryKey: ["daily"],
    queryFn: () => getDataList(8, `${Cocktail_API}random.php`),
    refetchInterval: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return (
    <div className="relative container mx-auto h-[80vh] overflow-hidden sm:backdrop-blur-sm sm:rounded-lg">
      <div className="flex flex-col gap-1 items-center">
        <div className="z-10 pt-2 text-6xl">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 font-[caveat] ml-4 md:ml-0 select-none w-fit h-20">
            Daily Pick &nbsp;
          </h1>
        </div>

        {isPending ? (
          <div className="hidden sm:grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[80%] mx-auto px-4 z-10">
            {Array.from({ length: 8 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="hidden sm:grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[80%] mx-auto px-4 z-10">
            {data?.map((item, index) => (
              <div key={item.idDrink} className="w-52 h-64">
                <Card
                  id={item.idDrink}
                  img={item.strDrinkThumb}
                  name={item.strDrink}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
        {/* Mobile */}
        {isPending ? (
          <div className="sm:hidden flex flex-col gap-5 items-center w-[80%] mx-auto px-4 py-2 z-10">
            {Array.from({ length: 2 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="sm:hidden flex flex-col gap-5 items-center w-[80%] mx-auto px-4 py-2 z-10">
            {data?.slice(0, 2).map((item, index) => (
              <div key={item.idDrink} className="w-52 h-64">
                <Card
                  id={item.idDrink}
                  img={item.strDrinkThumb}
                  name={item.strDrink}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Daily;
