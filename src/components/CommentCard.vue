<template>
  <div class="comment-item">
    <div class="name">
      <b>Name:</b>
      {{ comment && comment.name }}
    </div>
    <div class="email">
      <b>Email:</b>
      {{ comment && comment.email }}
    </div>
    <div class="body">
      <b>Comment:</b>
      {{ comment && comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      body: String
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-item {
  background: rgba(200, 200, 200, 0.2);
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 10px;

  .name {
    text-align: left;
    margin-bottom: 10px;
  }

  .email {
    text-align: left;
    margin-bottom: 10px;
  }

  .body {
    margin-top: 20px;
    text-align: justify;
  }
}
</style>
