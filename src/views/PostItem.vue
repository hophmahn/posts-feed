<template>
  <div class="wrapper">
    <div class="post-item-wrapper">
      <PostItemCard :post="post" />
    </div>
    <div class="comment-list-wrapper">
      <h3>Comments</h3>
      <div class="comment-item" v-for="comment in comments" :key="comment.id">
        <CommentCard :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostItemCard from "@/components/PostItemCard";
import CommentCard from "@/components/CommentCard";

export default {
  name: "PostItem",
  components: {
    PostItemCard,
    CommentCard
  },
  computed: {
    ...mapGetters(["users", "getPostById", "getCommentsByPostId"])
  },
  data() {
    return {
      post: {},
      comments: []
    };
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchUsers", "fetchComments"]),
    getPost() {
      const postId = this.$router.currentRoute.params.id;
      const post = this.getPostById(parseInt(postId));
      return post;
    },
    setPost() {
      const _post = this.getPost();
      this.post = {
        ..._post,
        user: this.users.find(user => user.id === _post.userId)
      };
    },
    async setComments() {
      await this.fetchComments();
      this.comments = [...this.getCommentsByPostId(this.post.id)];
    },
    async fetchAllData() {
      const post = this.getPost();

      if (!post) {
        await this.fetchPosts();
        await this.fetchUsers();
        this.setPost();
        this.setComments();
      } else {
        this.setPost();
        this.setComments();
      }
    },
    prepare() {
      this.fetchAllData();
    }
  },
  created() {
    this.prepare();
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>
