import { getPosts } from "@/services/PostService";

const postsModule = {
  state: { posts: new Map() },
  mutations: {
    setPosts(state, payload) {
      payload.forEach((post, index) => {
        state.posts.set(index, post);
      });
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await getPosts();
      commit("setPosts", posts);
    }
  }
};

export default postsModule;
