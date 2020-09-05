import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Dashboard from "../views/Dashboard";
import Polls from "../views/Polls";
import Responses from "../views/Responses";
import CreatePoll from "../views/CreatePoll";

Vue.use(VueRouter);

const routes = [
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
  {
    path: "/",
    alias: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/polls",
    name: "Polls",
    component: Polls,
  },
  {
    path: "/responses",
    name: "Responses",
    component: Responses,
  },
  {
    path: "/create-new-poll",
    name: "CreatePoll",
    component: CreatePoll,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
