import { COCKTAILS_CONFIG } from '@/shared'
import { ISideBarItem } from './types'

export const sideBarConfig: ISideBarItem[] = COCKTAILS_CONFIG.map(cocktail => ({
  path: cocktail.path,
  title: cocktail.title,
  icon: cocktail.icon,
}))
