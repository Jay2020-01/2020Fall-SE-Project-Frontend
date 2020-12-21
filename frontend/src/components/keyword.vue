<template>
    <span class="keywords-text-container">
      <span class="keywords-box" v-html="realText"></span>
    </span>
</template>

<script>

export default {
  name: "KeywordsText",
  props: ["keywords", "text"],
  computed: {
    realText() {
      let reg = new RegExp(this.keywords, 'ig');
      return this.text.replace(reg, (keyword) => {
        return `<span class="keywords">${keyword}</span>`

      });
    }
  },
}
</script>

<style scoped>
.keywords {
  color: #bf3f4a;
  font-weight: bold;
}
</style>
