<template>
  <div class="post-list">
    <h1>Post List</h1>
    <div class="list">
      <div class="list-item" v-for="post in posts" :key="post.id">
        <PostListItemCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostListItemCard from "@/components/PostListItemCard";

export default {
  name: "post-list",
  components: { PostListItemCard },
  data() {
    return {
      posts: []
    };
  },
  computed: {
    ...mapGetters({
      _posts: "posts",
      _users: "users"
    })
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchUsers"]),
    async fetchAllData() {
      await this.fetchPosts();
      await this.fetchUsers();
    },
    linkEntities() {
      this.posts = this._posts.map(post => {
        post.user = this._users.find(user => user.id === post.userId);
        return post;
      });
    },
    async prepare() {
      await this.fetchAllData();
      await this.linkEntities();
    }
  },
  created() {
    this.prepare();
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  width: 80%;
  margin: 0 auto;
}
.list {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
}

@media screen and (min-width: 620px) {
  .list {
    grid-template-columns: auto auto;
  }
}

@media screen and (min-width: 920px) {
  .list {
    grid-template-columns: auto auto auto;
  }
}
</style>
