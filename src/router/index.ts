import { createRouter, createWebHistory, useRoute } from "vue-router";

import loginPage from "./modules/loginPage";
import mainPage from "./modules/mainPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    ...loginPage,
    ...mainPage,
  ],
});

export const getActive = (maxLevel = 3): string => {
  const route = useRoute();
  if (!route.path) {
    return "";
  }
  return route.path
    .split("/")
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join("");
};

export default router;
