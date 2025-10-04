export interface CocktailConfig {
  id: string
  name: string
  title: string
  icon: string
  path: string
}

export const COCKTAILS_CONFIG: CocktailConfig[] = [
  {
    id: 'margarita',
    name: 'margarita',
    title: 'Margarita',
    icon: '🍹',
    path: '/drinks/margarita',
  },
  {
    id: 'mojito',
    name: 'mojito',
    title: 'Mojito',
    icon: '🍸',
    path: '/drinks/mojito',
  },
  {
    id: 'a1',
    name: 'a1',
    title: 'A1',
    icon: '🥃',
    path: '/drinks/a1',
  },
  {
    id: 'kir',
    name: 'kir',
    title: 'Kir',
    icon: '🍷',
    path: '/drinks/kir',
  },
]

export const getDefaultCocktail = () => COCKTAILS_CONFIG[0]
