import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDataList = async (amount: number, api: string) => {
  try {
    const responses = await Promise.all(
      Array(amount)
        .fill(null)
        .map(() => fetch(api).then((res) => res.json()))
    );
    return responses.map((res) => res.drinks[0]);
  } catch (error) {
    throw new Error(error as string);
  }
};
