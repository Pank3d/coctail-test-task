import { Ref } from 'vue'
import { useQuery } from '@pinia/colada'
import { cocktailsApi } from '../api/api'

export const useCocktails = (cocktailName: Ref<string>) => {
  return useQuery({
    key: () => ['cocktails', cocktailName.value] as const,
    query: () => cocktailsApi.getCocktails(cocktailName.value),
    enabled: () => !!cocktailName.value,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}
