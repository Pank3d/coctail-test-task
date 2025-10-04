import { ICocktailData } from '@/entities'

export interface CocktailCardProps {
  cocktail: ICocktailData
}

export interface CocktailsNotFoundProps {
  cocktailName: string
}

export interface CocktailsListProps {
  cocktails: ICocktailData[]
}

export interface IngredientsListProps {
  cocktail: ICocktailData
}
