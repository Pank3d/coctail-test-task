import { useQuery } from "@tanstack/vue-query";
import { computed, unref, type MaybeRef } from "vue";
import { cocktailsApi } from "../api/api";
import type { CocktailResponse } from "../api/types";

export const useCocktails = (cocktailName: MaybeRef<string>) => {
  const name = computed(() => unref(cocktailName));

  return useQuery<CocktailResponse>({
    queryKey: ["cocktails", name],
    queryFn: () => cocktailsApi.getCocktails(name.value),
    enabled: computed(() => !!name.value),
  });
};
