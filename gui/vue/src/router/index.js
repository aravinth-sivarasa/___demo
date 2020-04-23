import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "login" */ "../Login.vue")
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../Dashboard.vue")
  },
  {
    path: "/data",
    component: () =>
      import(/* webpackChunkName: "search data" */ "../views/SearchData.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
