import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Forpass from "../views/Forpass.vue";
import Dashboard from "../views/Dashboard.vue";
import Verify from "../views/Verify.vue";
import Update from "../views/Update.vue";
import Reset from "../views/Reset.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Forpass",
    name: "Forpass",
    component: Forpass,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Verify",
    name: "Verify",
    component: Verify,
  },
  {
    path: "/Update",
    name: "Update",
    component: Update,
  },
  {
    path: "/Reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  
  
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
