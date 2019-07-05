import router from '../router';
import calcuRem from './calcuRem';
import { MAX_WIDTH } from './config';

function routerControl(to, from, next) {
  const docEl = document.documentElement;
  const { clientWidth } = docEl;
  const { name } = to;
  const testPcName = /\W*Pc$/.test(name);
  // 在pc端打开
  if (clientWidth >= MAX_WIDTH) {
    const matched = !testPcName && router.match({ name: `${name}Pc` }).matched.length;
    if (matched) next({ name: `${name}Pc` });
  } else {
    // 在M站打开
    const subName = name.substring(0, name.length - 2);
    const matched = testPcName && router.match({ name: subName }).matched.length;
    // 计算出根元素的rem
    if (matched) next({ name: subName });
  }
  next();
}

// 在进入路由前，计算屏幕宽度，选择显示不同的视图
router.beforeEach((to, from, next) => {
  routerControl(to, from, next);
});
