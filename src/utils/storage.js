// 存储工具类
// 设置storage
export function setStore(name, content) {
  if (!name) return;
  let res = content;
  if (typeof content !== 'undefined') {
    res = JSON.stringify(content);
  }
  window.localStorage.setItem(name, res);
}

// 获取storage
export function getStore(name) {
  if (!name) return null;
  const value = window.localStorage.getItem(name);
  return value && JSON.parse(value);
}
// 删除storage
export function removeStore(name) {
  if (!name) return;
  window.localStorage.removeItem(name);
}

// 读取cookie
export function readCookie(name) {
  if (!name) return null;
  const cookie = document && document.cookie;
  if (cookie && cookie.length > 0) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    }
  }
  return null;
}

// 设置cookie
export function writeCookie(name, value, expiredays) {
  if (!name || !document) return;
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  // const rootDomain = document.domain.substring(document.domain.indexOf('.') + 1);
  const rootDomain = document.domain;
  const validExpiredays = expiredays == null ? '' : `;expires=${exdate.toGMTString()}`;
  const cookies = `${name}=${escape(value)}${validExpiredays};path=/;domain=${rootDomain};`;
  document.cookie = cookies;
}

// 删除cookie
export function removeCookie(name) {
  writeCookie(name, '', -1);
}
