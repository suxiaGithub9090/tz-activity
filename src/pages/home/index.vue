<template>
  <div class="wrapper">
    <p>home</p>
    <button @click="toAct">to activity</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toAct() {
      this.$router.push({ name: 'activity' });
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  background: #ffab4a;
  max-width: 10rem;
}
p {
  font-size: 3rem;
}
</style>
