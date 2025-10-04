import { ISideBarItem } from "./types";
import { routesPath } from "@/app/providers/router/routes";

export const sideBarConfig: ISideBarItem[] = [
  {
    path: routesPath.drinks.tabs.margarita,
    title: "Margarita",
    icon: "🍹",
  },
  {
    path: routesPath.drinks.tabs.mojito,
    title: "Mojito",
    icon: "🍸",
  },
  {
    path: routesPath.drinks.tabs.ai,
    title: "A1",
    icon: "🥃",
  },
  {
    path: routesPath.drinks.tabs.kir,
    title: "Kir",
    icon: "🍷",
  },
];