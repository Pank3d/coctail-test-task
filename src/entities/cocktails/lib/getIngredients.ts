import type { ICocktailData } from '../api/types'
import { Ingredient } from './types'

const MAX_INGREDIENTS = 15

export const getIngredients = (cocktail: ICocktailData): Ingredient[] => {
  const ingredients: Ingredient[] = []

  for (let i = 1; i <= MAX_INGREDIENTS; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof ICocktailData]
    const measure = cocktail[`strMeasure${i}` as keyof ICocktailData]

    if (ingredient && typeof ingredient === 'string') {
      ingredients.push({
        name: ingredient,
        measure: typeof measure === 'string' ? measure.trim() : '',
      })
    }
  }

  return ingredients
}
