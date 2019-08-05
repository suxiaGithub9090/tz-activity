<template>
  <div>
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
    <div class="btn">
      <button @click="toastTip">toast 轻提示</button>
    </div>
    <div class="btn">
      <button @click="loadingTip">loading</button>
    </div>
  </div>
</template>
<script>
import { Row, Col } from 'vant';

export default {
  components: { VanRow: Row, VanCol: Col },
  data() {
    return {};
  },
  methods: {
    toastTip() {
      this.$toast('小仙女');
    },
    loadingTip() {
      this.$loading();
    },
  },
};
</script>

<style lang="less" scoped>
.van-col {
  background: #dddddd;
}
button {
  background: #8aa6df;
}
.btn {
  margin: 10px;
}
</style>
