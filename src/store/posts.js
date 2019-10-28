import { getPosts } from "@/services/PostService";

const postsModule = {
  state: { posts: [] },
  mutations: {
    setPosts(state, payload) {
      state.posts = [...payload];
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    getPostById: state => id => {
      return state.posts.find(post => post.id === id);
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
