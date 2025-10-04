import { createRouter, createWebHistory } from "vue-router";
import { routesPath } from "./routes";
import { MainPage, NotFoundPage } from "@/pages";

const routes = [
  {
    path: routesPath.root,
    redirect: routesPath.drinks.tabs.margarita,
  },
  {
    path: routesPath.drinks.tabs.margarita,
    name: "margarita-drink",
    component: MainPage,
    meta: {
      title: "Margarita",
      cocktailName: "margarita",
    },
  },
  {
    path: routesPath.drinks.tabs.mojito,
    name: "mojito-drink",
    component: MainPage,
    meta: {
      title: "Mojito",
      cocktailName: "mojito",
    },
  },
  {
    path: routesPath.drinks.tabs.ai,
    name: "ai-drinks",
    component: MainPage,
    meta: {
      title: "A1",
      cocktailName: "a1",
    },
  },
  {
    path: routesPath.drinks.tabs.kir,
    name: "kir-drinks",
    component: MainPage,
    meta: {
      title: "Kir",
      cocktailName: "kir",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
  },
];

// Создаем экземпляр роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Обработка ошибок навигации
router.onError((error) => {
  console.error("Router navigation error:", error);
});

// Глобальный navigation guard для проверки
router.beforeEach((to, from, next) => {
  try {
    // Валидация или другая логика
    next();
  } catch (error) {
    console.error("Navigation guard error:", error);
    next(false);
  }
});

export default router;
