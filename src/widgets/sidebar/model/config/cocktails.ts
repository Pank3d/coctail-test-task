import { CocktailConfig, ISideBarItem } from './types'

export const COCKTAILS_CONFIG: CocktailConfig[] = [
  {
    id: 'margarita',
    name: 'margarita',
    title: 'Margarita',
    path: '/drinks/margarita',
  },
  {
    id: 'mojito',
    name: 'mojito',
    title: 'Mojito',
    path: '/drinks/mojito',
  },
  {
    id: 'a1',
    name: 'a1',
    title: 'A1',
    path: '/drinks/a1',
  },
  {
    id: 'kir',
    name: 'kir',
    title: 'Kir',
    path: '/drinks/kir',
  },
]

export const getDefaultCocktail = () => COCKTAILS_CONFIG[0]

export const sideBarConfig: ISideBarItem[] = COCKTAILS_CONFIG.map(cocktail => ({
  path: cocktail.path,
  title: cocktail.title,
}))
