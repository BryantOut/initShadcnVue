export default [
  {
    path: "/",
    name: "home",
    component: import("@/layouts/index.vue"),
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页" },
      },
    ],
  },
  {
    path: "/modifyPwd",
    name: "modifyPwd",
    component: import("@/layouts/index.vue"),
    redirect: "/modifyPwd/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/modifyPwd/index.vue"),
        meta: { title: "修改密码" },
      },
    ],
  },
];
