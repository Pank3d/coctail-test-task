import { defineStore } from "pinia";
import { cocktailsApi } from "@/entities";
import { useApiRequest } from "@/shared";

export const useCocktailStore = defineStore("cocktailStore", () => {
  const searchCocktails = useApiRequest(cocktailsApi.getCocktails);

  return {
    searchCocktails,
  };
});
