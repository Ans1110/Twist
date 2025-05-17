export const Path = {
  Home: "/",
  Popular: "/popular",
  Search: "/search",
  About: "/about",
} as const;

export const Cocktail_API = "https:www.thecocktaildb.com/api/json/v1/1/";

export type Path = (typeof Path)[keyof typeof Path];

export type MenuList = {
  path: Path;
  name: string;
};

export type CardProps = {
  id: string;
  img: string;
  name: string;
  index: number;
};
