import Vue from "vue";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hooks from "../views/Hooks.vue";
import Form from "../views/Form.vue";
import TestPage from "../views/TestPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Hooks",
    name: "Hooks",
    component: Hooks,
  },
  {
    path: "/Form",
    name: "Form",
    component: Form,
  },
  {
    path: "/TestPage",
    name: "TestPage",
    component:TestPage,
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
