<template>
  <div class="post-list">
    Posts List
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "post-list",
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
  }
};
</script>
