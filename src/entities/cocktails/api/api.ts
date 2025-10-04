import { axiosInstance } from "@/shared";
import { CocktailResponse } from "./types";
import { AxiosResponse } from "axios";

export const cocktailsApi = {
  getCocktails: async (code: string): Promise<AxiosResponse<CocktailResponse>> => {
    const response = await axiosInstance.get<CocktailResponse>("/api/json/v1/1/search.php", {
      params: {
        s: code,
      },
    });
    return response;
  },
};
