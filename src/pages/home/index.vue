<template>
  <div class="wrapper">
    <p>用户信息：{{ userInfo }}</p>
    <div>
      <button @click="toAct">to activity</button>
    </div>
    <div>
      <button @click="setToken">set Token</button>
    </div>
    <div>
      <button @click="removeToken">remove Token</button>
    </div>
  </div>
</template>
<script>
import { bannerList, myInfo } from '@/api';
import { SET_TOKEN } from '@/store/types';

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    // this.getBanner();
    this.getUserInfo();
  },
  methods: {
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
    setToken() {
      this.$store.commit(SET_TOKEN, '11227db1068b0859ac5843aa887e5411');
      this.getUserInfo();
    },
    removeToken() {
      this.$store.commit(SET_TOKEN, '');
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
button {
  border: 1px solid #dddddd;
  font-size: 0.37rem;
  padding: 0.1rem 0.3rem;
  background: white;
}
</style>
