import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./posts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts: postsModule
  }
});
