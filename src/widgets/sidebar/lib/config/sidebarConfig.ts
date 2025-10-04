import { ISideBarItem } from './types'
import { COCKTAILS_CONFIG } from '@/shared'

// Динамическая генерация sidebar из конфига
export const sideBarConfig: ISideBarItem[] = COCKTAILS_CONFIG.map(cocktail => ({
  path: cocktail.path,
  title: cocktail.title,
  icon: cocktail.icon,
}))
