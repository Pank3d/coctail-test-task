import { useQuery } from "@tanstack/vue-query";
import { cocktailsApi } from "../api/api";
import type { CocktailResponse } from "../api/types";

export const useCocktails = (cocktailName: string) => {
  return useQuery<CocktailResponse>({
    queryKey: ["cocktails", cocktailName],
    queryFn: () => cocktailsApi.getCocktails(cocktailName),
    enabled: !!cocktailName,
  });
};
