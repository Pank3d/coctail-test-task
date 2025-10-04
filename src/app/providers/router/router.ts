import { createRouter, createWebHistory } from 'vue-router'
import { routesPath } from './routes'
import { MainPage, NotFoundPage } from '@/pages'
import { COCKTAILS_CONFIG, getDefaultCocktail } from '@/shared'

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

router.onError(error => {
  console.error('Router navigation error:', error)
})

router.beforeEach((to, from, next) => {
  try {
    next()
  } catch (error) {
    console.error('Navigation guard error:', error)
    next(false)
  }
})

export default router
