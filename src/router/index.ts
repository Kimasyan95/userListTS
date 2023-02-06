import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UserListView from "../views/UserListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "UserListView",
    component: UserListView,
  },
  {
    path: "/user-form",
    name: "userFormPage",
    component: () => import("../views/UserFormView.vue"),
  },
  {
    path: "/user/:id",
    name: "userPage",
    component: () => import("../views/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
