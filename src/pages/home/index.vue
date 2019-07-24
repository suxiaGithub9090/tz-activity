<template>
  <div class="wrapper">
    <p>用户信息：{{ userInfo }}</p>
    <button @click="toAct">to activity</button>
    <button @click="setLocal">set localTest</button>
  </div>
</template>
<script>
import { bannerList, myInfo } from '@/api';
import { SET_LOCALTEST } from '@/store/types';

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    // this.getBanner();
    // this.getUserInfo();
  },
  methods: {
    setLocal() {
      this.$store.commit(SET_LOCALTEST, true);
    },
    toAct() {
      this.$router.push({ name: 'activity' });
    },
    async getBanner() {
      await this.$request(bannerList);
    },
    async getUserInfo() {
      const res = await this.$request(myInfo, { onlyFree: 0 });
      this.userInfo = res.data;
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
  font-size: 0.5rem;
}
</style>
