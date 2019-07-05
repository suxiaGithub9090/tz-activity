<template>
  <div>
    <div
      v-for="item in list"
      :key="item"
      class="item"
    >{{ item }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style lang="less" scoped>
.item {
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 1px solid black;
}
</style>
