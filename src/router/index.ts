import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { firstUpperCase } from "@/utils/firstUpperCase";

const pages = import.meta.globEager("../pages/**/index.vue");
const routerFiles = [];
for (const path in pages) {
  const cpnPath = path.replace("../pages", "").replace("/index.vue", "");
  const cpnDir = path.replace("../pages/", "").replace("/index.vue", "");
  const firstUpper = firstUpperCase(cpnDir);
  const component = {
    path: cpnPath,
    name: firstUpper,
    component: () => import(/* @vite-ignore */ path),
  };
  routerFiles.push(component);
}

routerFiles.push({
  path: "/:pathMatch(.*)*",
  name: "notfound",
  component: import("@/pages/notfound/index.vue"),
});

const routes: RouteRecordRaw[] = routerFiles;

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
