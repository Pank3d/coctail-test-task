import { axiosInstance } from "@/shared";
import { CocktailResponse } from "./types";

export const cocktailsApi = {
  getCocktails: async (code: string): Promise<CocktailResponse> => {
    const response = await axiosInstance.get<CocktailResponse>("/api/json/v1/1/search.php", {
      params: {
        s: code,
      },
    });
    
    return response.data;
  },
};
