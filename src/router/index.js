import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { sidebar: false, header: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { sidebar: false, header: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
