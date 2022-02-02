import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: () => import("@/pages/home/home.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 守卫
// router.beforeEach((to) => {
//   if (to.path !== "/login") {
//     if (token) {
//       return "/login";
//     }
//   }

//   if (to.path === "/main") {
//     return firstMenu.url;
//   }
// });

export default router;
