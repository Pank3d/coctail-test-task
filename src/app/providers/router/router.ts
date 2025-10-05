import { createRouter, createWebHistory } from 'vue-router'
import { MainPage, NotFoundPage } from '@/pages'
import { COCKTAILS_CONFIG, getDefaultCocktail } from '@/widgets/sidebar/model/config'

import { routesPath } from './routes'

const cocktailRoutes = COCKTAILS_CONFIG.map(cocktail => ({
  path: cocktail.path,
  name: `${cocktail.id}-drink`,
  component: MainPage,
  meta: {
    title: cocktail.title,
    cocktailName: cocktail.name,
  },
}))

const routes = [
  {
    path: routesPath.root,
    redirect: getDefaultCocktail().path,
  },
  ...cocktailRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.onError(() => {
  // тут ловим ошибки роутеров
})

router.beforeEach((_to, _from, next) => {
  try {
    next()
  } catch {
    next(false)
  }
})

export default router
