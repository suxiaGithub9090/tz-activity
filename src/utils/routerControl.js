import router from '../router';
import calcuRem from './calcuRem';
import { isOpenInPc } from './index';
import store from '@/store';
import { SET_CALCUREM } from '@/store/types';

const reg = /\/(?<platform>p|m)\/(?<subPath>\S+)/;

function routerControl(to, from, next) {
  const {
    groups: { platform, subPath },
  } = reg.exec(to.path) || { groups: {} };
  // 在pc端打开
  if (isOpenInPc()) {
    const path = `/p/${subPath}`;
    const matched = platform !== 'p' && router.match({ path }).matched.length;
    if (matched) next({ path: `/p/${subPath}` });
  } else {
    // 在M站打开
    // 计算出根元素的rem
    if (!store.getters.calcuRem) {
      calcuRem();
      store.commit(SET_CALCUREM, true);
    }
    const path = `/m/${subPath}`;
    const matched = platform !== 'm' && router.match({ path }).matched.length;
    if (matched) next({ path });
  }
  next();
}

// 在进入路由前，计算平台类型，选择显示不同的视图
router.beforeEach((to, from, next) => {
  routerControl(to, from, next);
});
