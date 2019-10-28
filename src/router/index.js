import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "@/views/PostList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post-list",
    component: PostList
  },
  {
    path: "/post/:id",
    name: "post-item",
    component: () => import("@/views/PostItem.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
