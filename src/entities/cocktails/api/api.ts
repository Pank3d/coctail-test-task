import { axiosInstance } from "@/shared";
import { CocktailResponse } from "./types";

export const cocktailsApi = {
  getCocktails: (code: string) =>
    axiosInstance.get<CocktailResponse>("/api/json/v1/1/search.php", {
      params: {
        s: code,
      },
    }),
};
