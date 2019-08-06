import { OSS, ICON, STATIC } from './env';

export function getImgFullPath(url = '') {
  const prefix = url.includes('/udb/user/') ? STATIC : OSS;
  if (/^https?:\/\//.test(url)) return url;
  return prefix + url;
}

export function getIconUrl(name = '') {
  if (!name) return name;
  return `${ICON}${name}.svg`;
}

// 判断用户是否是在pc端打开页面
export function isOpenInPc() {
  return !/(Android|iPhone|iPad|iPod|iOS|BlackBerry|webOs)/i.test(navigator.userAgent);
}

/**
 * 节流：给定时间内只执行第一次
 * @param {function} func 实际执行函数
 * @param {number} time 执行频率
 */
/* eslint-disable */
export function throttle(func, time) {
  let last = 0;
  return function(...args) {
    const now = +new Date();
    if (now - last < time) return;
    last = now;
    return func.apply(this, args);
  };
}
