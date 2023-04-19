import { createRouter, createWebHistory } from "vue-router";

const Homepage = () => import("@/views/homepage/homepage.vue");
const PageLayout = () => import("@/layout/page-layout.vue");

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: PageLayout,
      children: [
        {
          path: "/",
          name: "homepage",
          component: Homepage
        }
      ]
    }
  ]
});

export default router;
