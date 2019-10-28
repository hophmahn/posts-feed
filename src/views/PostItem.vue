<template>
  <div class="post-item">
    <router-link to="/">Go back to Post List</router-link>
    <h1 class="title">{{ post && post.title }}</h1>
    <h5 class="author">{{ post && post.user && post.user.name }}</h5>
    <div class="body">{{ post && post.body }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["users", "getPostById"])
  },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchUsers"]),
    getPost() {
      const postId = this.$router.currentRoute.params.id;
      const post = this.getPostById(parseInt(postId));
      return post;
    },
    setPost() {
      const _post = this.getPost();
      this.post = {
        ..._post,
        user: this.users.find(user => user.id === _post.userId),
      };
    },
    async fetchAllData() {
      const post = this.getPost();

      if (!post) {
        await this.fetchPosts();
        await this.fetchUsers();
        this.setPost();
      } else {
        this.setPost();
      }
    },
    prepare() {
      this.fetchAllData();
    }
  },
  created() {
    this.prepare();
  }
}
</script>

<style lang="scss" scoped>
.post-item {
  width: 80%;
  margin: 0 auto;
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .body {
    text-align: justify;
  }
}
</style>