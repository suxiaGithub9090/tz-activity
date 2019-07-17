import router from '../router';
import calcuRem from './calcuRem';
import { IS_PC } from './config';
import store from '@/store';
import { SET_CALCUREM, SET_LOGIN } from '../store/types';

const reg = /\/(?<platform>p|m)\/(?<subPath>\S+)/;

function routerControl(to, from, next) {
  const {
    groups: { platform, subPath },
  } = reg.exec(to.path) || { groups: {} };
  // 在pc端打开
  if (IS_PC) {
    const path = `/p/${subPath}`;
    const matched = platform !== 'p' && router.match({ path }).matched.length;
    if (matched) next({ path });
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

// 路由参数中携带token的处理
function tokenControl(to) {
  const {
    query: { token },
  } = to;
  if (token) store.commit(SET_LOGIN, token);
}

router.beforeEach((to, from, next) => {
  // 路由携带token的处理
  tokenControl(to);
  // 在进入路由前，计算平台类型，选择显示不同的视图
  routerControl(to, from, next);
});
