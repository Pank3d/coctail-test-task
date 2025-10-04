import { createRouter, createWebHistory } from "vue-router";
import { routesPath } from "./routes";
import { MainPage } from "@/pages";

const routes = [
  {
    path: routesPath.drinks.tabs.maragarita,
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
];

// Создаем экземпляр роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
