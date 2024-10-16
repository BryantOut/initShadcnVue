import { Home, ShieldCheck } from "lucide-vue-next";

export default [
  {
    path: "/home",
    name: "home",
    component: import("@/layouts/index.vue"),
    redirect: "/home/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页", icon: Home },
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
        meta: { title: "修改密码", icon: ShieldCheck },
      },
    ],
  },
];
