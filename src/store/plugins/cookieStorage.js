/**
 * 存入cookie中的数据，通过vuex进行存取
 */
import { readCookie, writeCookie, removeCookie } from '@/utils/storage';
import cookieStorageMap from '../cookieStorageMap';

const cookieExpirse = 7; // cookie有效期

function initCookie(store) {
  Object.keys(cookieStorageMap).forEach(key => {
    const cookieVal = readCookie(cookieStorageMap[key]);
    if (cookieVal) store.commit(key, cookieVal);
  });
}

export default store => {
  initCookie(store);
  store.subscribe(mutation => {
    const { type: vuexKey, payload } = mutation;
    const cookieKey = cookieStorageMap[vuexKey];
    if (cookieKey) {
      if (payload) writeCookie(cookieKey, payload, cookieExpirse);
      else removeCookie(cookieKey);
    }
  });
};
