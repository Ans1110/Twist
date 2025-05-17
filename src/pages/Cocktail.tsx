import { getDataById } from "@/lib/utils";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Cocktail_API } from "../types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import SkeletonCard from "../components/SkeletonCard";
import { motion } from "framer-motion";

const Cocktail = () => {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["cocktail", id],
    queryFn: () => getDataById(id as string, Cocktail_API),
  });

  return (
    <>
      {/*Desktop view*/}
      <div className="hidden sm:block sm:relative container mx-auto h-[80vh] overflow-hidden sm:backdrop-blur-sm sm:rounded-lg">
        {/* left side */}
        {isPending ? (
          <div className="absolute w-full h-full left-40 top-50 ">
            <SkeletonCard />
          </div>
        ) : (
          <div className="absolute w-2/5 h-full left-0 top-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center xl:gap-10 gap-5 w-[94%] md:w-[90%] xl:w-3/4 h-3/4 container mx-auto translate-y-1/5 bg-white/10 backdrop-blur-lg rounded-lg box-border ring-2 ring-white/20"
            >
              <img
                className="w-48 md:w-60 h-48 md:h-60 object-cover rounded-2xl"
                src={data?.strDrinkThumb}
                alt={data?.strDrink}
              />
              <div className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent font-[changa] text-6xl text-center">
                <h1 className="">{data?.strDrink}</h1>
              </div>
            </motion.div>
          </div>
        )}
        {/* right side */}
        {isPending ? (
          <div className="absolute w-3/5 h-full right-0 top-0">
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 65, color: "#FAA0BF" }}
                  spin
                />
              }
              className="absolute top-72 left-1/2 transform -translate-x-1/2"
            />
          </div>
        ) : (
          <div
            className="absolute w-3/5 h-full right-0 top-0 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col xl:gap-10 gap-5 items-center justify-start w-[80%] xl:w-2/3 h-auto min-h-full py-8 container mx-auto"
            >
              <div className="bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent font-[changa] text-6xl text-center">
                <h2>Ingredients</h2>
              </div>
              <ul className="flex flex-col xl:gap-2 gap-1 text-left w-[80%] xl:w-2/3">
                {Array.from({ length: 15 }, (_, index) => {
                  if (
                    data?.[`strIngredient${index + 1}` as keyof typeof data]
                  ) {
                    return (
                      <li
                        key={index}
                        className="text-2xl text-left text-rose-300"
                      >
                        <p>
                          <span className="font-changa text-red-300">
                            {
                              data?.[
                                `strIngredient${index + 1}` as keyof typeof data
                              ]
                            }
                          </span>
                          &nbsp;:&nbsp;
                          <span className="font-alata text-red-400">
                            {
                              data?.[
                                `strMeasure${index + 1}` as keyof typeof data
                              ]
                            }
                          </span>
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
              <div className="bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent font-[changa] text-6xl text-center truncate">
                <h2>Instructions</h2>
              </div>
              <p className="text-amber-200 font-serif text-2xl text-left w-[80%] xl:w-2/3 break-words md:break-normal">
                {data?.strInstructions}
              </p>
            </motion.div>
          </div>
        )}
      </div>
      {/*Mobile view*/}
      <div
        className="block sm:hidden h-[80vh] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className=" w-[94%] min-h-full mx-auto bg-white/10 backdrop-blur-lg rounded-lg box-border ring-2 ring-white/20 break-words">
          {isPending ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 48, color: "#FAA0BF" }}
                  spin
                />
              }
              className="absolute top-78 left-1/2 transform -translate-x-1/2"
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-evenly py-4 gap-4"
            >
              <div className="flex flex-row items-center justify-evenly gap-2 w-[90%]">
                <img
                  className="w-30 h-30 object-cover rounded-2xl"
                  src={data?.strDrinkThumb}
                  alt={data?.strDrink}
                />
                <div className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent font-[changa] text-4xl text-center">
                  <h1 className="">{data?.strDrink}</h1>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 w-[90%]">
                <div className="bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent font-[changa] text-6xl text-center">
                  <h2>Ingredients</h2>
                </div>
                <ul className="flex flex-col items-center justify-center gap-2">
                  {Array.from({ length: 15 }, (_, index) => {
                    if (
                      data?.[`strIngredient${index + 1}` as keyof typeof data]
                    ) {
                      return (
                        <li
                          key={index}
                          className="text-2xl text-center text-rose-300"
                        >
                          <p>
                            <span className="font-changa text-red-300">
                              {
                                data?.[
                                  `strIngredient${
                                    index + 1
                                  }` as keyof typeof data
                                ]
                              }
                            </span>
                            &nbsp;:&nbsp;
                            <span className="font-alata text-red-400">
                              {
                                data?.[
                                  `strMeasure${index + 1}` as keyof typeof data
                                ]
                              }
                            </span>
                          </p>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent font-[changa] text-6xl text-center">
                  <h2>Instructions</h2>
                </div>
                <p className="text-amber-200 font-serif text-2xl text-center break-words">
                  {data?.strInstructions}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cocktail;
