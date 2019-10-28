import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./posts";
import usersModule from "./users";
import commentsModule from "./comments";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts: postsModule,
    users: usersModule,
    comments: commentsModule
  }
});
