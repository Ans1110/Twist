import SInput from "@/components/ui/SInput";
import { useQuery } from "@tanstack/react-query";
import { getDataByName } from "@/lib/utils";
import { Cocktail_API } from "@/types";
import { useState } from "react";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import type { CocktailData } from "@/types";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => getDataByName(searchTerm, Cocktail_API),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: 24 * 60 * 60 * 1000,
    enabled: !!searchTerm,
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mx-auto pb-16">
      <div className="flex flex-col items-center justify-start gap-4 py-8">
        <div className="mb-8">
          <h1 className="lg:text-7xl sm:text-6xl text-3xl font-[changa] text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">
            Find&nbsp;your&nbsp;favorite&nbsp;cocktail
          </h1>
        </div>
        <div className="w-[65%] mb-8">
          <SInput
            name={searchTerm}
            isLoading={searchTerm ? isPending : false}
            onSearch={handleSearch}
          />
        </div>

        {/* Search Results */}
        {searchTerm && (
          <div className="w-full ">
            {isPending ? (
              <div className="text-center">
                <p className="text-xl text-white">Searching...</p>
              </div>
            ) : data && data.length > 0 ? (
              <>
                <h2 className="text-3xl font-[changa] text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 mb-6">
                  Search Results for "{searchTerm}"
                </h2>
                <div className="flex flex-wrap justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {data.map((cocktail: CocktailData, index: number) => (
                    <motion.div
                      key={cocktail.idDrink}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card
                        id={cocktail.idDrink}
                        img={cocktail.strDrinkThumb}
                        name={cocktail.strDrink}
                        index={index}
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-xl text-white font-[alata] text-center">
                  No cocktails found.
                  <br />
                  Try another search term.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
