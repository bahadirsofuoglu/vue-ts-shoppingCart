import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: () =>
    import("../views/Index.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
        import("../views/Home.vue"),
      }
    ]
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
