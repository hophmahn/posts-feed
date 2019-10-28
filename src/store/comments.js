import { getComments } from "@/services/CommentService";

const commentsModule = {
  state: { comments: [] },
  mutations: {
    setComments(state, payload) {
      state.comments = [...payload];
    }
  },
  getters: {
    comments(state) {
      return state.comments;
    },
    getCommentsByPostId: state => postId => {
      return state.comments.filter(comment => comment.postId === postId);
    }
  },
  actions: {
    async fetchComments({ commit }) {
      const comments = await getComments();
      console.log(comments);
      commit("setComments", comments);
    }
  }
};

export default commentsModule;
