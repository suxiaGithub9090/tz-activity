import request from './request';
import imgCompress from './imgCompress';
import interact from './interact';

export default {
  install(Vue) {
    Vue.use(request)
      .use(imgCompress)
      .use(interact);
  },
};
