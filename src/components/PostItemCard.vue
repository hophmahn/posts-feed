<template>
  <div class="post-item">
    <router-link to="/">Go back to Post List</router-link>
    <h1 class="title">{{ post && post.title }}</h1>
    <h5 class="author">{{ post && post.user && post.user.name }}</h5>
    <div class="body">{{ post && post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      title: String,
      user: Object,
      body: String
    }
  }
};
</script>

<style lang="scss" scoped>
.post-item {
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  .body {
    text-align: justify;
  }
}
</style>
