import type { ICocktailData } from "../api/types";

export interface Ingredient {
  name: string;
  measure: string;
}

export const getIngredients = (cocktail: ICocktailData): Ingredient[] => {
  const ingredients: Ingredient[] = [];

  Array.from({ length: 15 }, (_, i) => i + 1).forEach((index) => {
    const ingredient = cocktail[`strIngredient${index}` as keyof ICocktailData];
    const measure = cocktail[`strMeasure${index}` as keyof ICocktailData];

    if (ingredient) {
      ingredients.push({
        name: ingredient as string,
        measure: (measure as string) || "",
      });
    }
  });

  return ingredients;
};
