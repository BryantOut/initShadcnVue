import { createRouter, createWebHistory } from "vue-router";

import loginPage from "./modules/loginPage";
import mainPage from "./modules/mainPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...loginPage, ...mainPage],
});

export default router;
