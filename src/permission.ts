import "nprogress/nprogress.css"; // progress bar style

import NProgress from "nprogress"; // progress bar

import router from "@/router";
import { useUserStore } from "@/store";

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const userStore = useUserStore();
  console.log(userStore.firstEnter, to.path, userStore.token);
  // 刷新页面校验登录
  if (!userStore.token && to.path !== "/login") {
    next({
      path: "/login",
    });
  } else {
    next();
  }
  // if (userStore.firstEnter && to.path !== '/login') {
  //   if (userStore.token) {
  //     // 校验登录状态
  //     await userStore.checkLogin();
  //   }
  //   userStore.setIsFirstEnter(false);
  // }
  // console.log(userStore.isLogin, userStore.token)
  // if (userStore.isLogin && userStore.token) {
  //   next();
  // } else {
  //   next({
  //     path: '/login',
  //   });
  // }
});

router.afterEach(async () => {
  // if (to.path === '/login') {
  //   const userStore = useUserStore();

  //   userStore.logout();
  //   // 获取临时token
  //   await userStore.checkLogin();
  // }
  NProgress.done();
});
