import { useQuery } from "@tanstack/react-query";
import { Cocktail_API } from "../types/type";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const Daily = () => {
  const { data, isPending } = useQuery({
    queryKey: ["daily"],
    queryFn: async () => {
      const responses = await Promise.all(
        Array(8)
          .fill(null)
          .map(() =>
            fetch(`${Cocktail_API}random.php`).then((res) => res.json())
          )
      );
      return responses.map((res) => res.drinks[0]);
    },
    refetchInterval: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return (
    <div className="relative container mx-auto h-[82vh] overflow-hidden backdrop-blur-sm rounded-lg">
      <div className="flex flex-col gap-5 items-center">
        <div className="z-10 pt-2">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 font-[caveat] text-6xl ml-4 md:ml-0">
            Daily Pick &nbsp;
          </h1>
        </div>

        {isPending ? (
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-[80%] mx-auto px-4 z-10">
            {Array.from({ length: 8 }, (_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-[80%] mx-auto px-4 z-10">
            {data?.map((item, index) => (
              <div key={item.idDrink} className="w-52 h-64">
                <Card
                  key={item.idDrink}
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
              <Card
                key={item.idDrink}
                img={item.strDrinkThumb}
                name={item.strDrink}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Daily;
