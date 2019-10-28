<template>
  <div class="post-card">
    <div class="title">
      <h4>{{ post && capitalizeFirstLetter(post.title) }}</h4>
    </div>
    <div class="body">
      {{ post &&
        `${capitalizeFirstLetter(shortenText(post.body, 80))}...`
      }}
      <div class="read-more-link">
        <router-link :to="{ path: `/post/${post.id}` }">
          Read more >>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <span>Author:</span> {{ post && post.user.name }}
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter, shortenText } from "@/helpers/text";

export default {
  props: {
    post: {
      title: String,
      body: String,
      user: Object
    }
  },
  methods: {
    capitalizeFirstLetter,
    shortenText
  }
};
</script>

<style lang="scss" scoped>
.post-card {
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

.title {
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  padding: 0 20px;
}

.body {
  padding: 20px;
  text-align: justify;

  .read-more-link {
    margin-top: 20px;
    text-align: right;
  }
}

.footer {
  border-top: 1px solid rgba(100, 100, 100, 0.3);
  padding: 10px 0;

  span {
    font-weight: bolder;
  }
}
</style>
