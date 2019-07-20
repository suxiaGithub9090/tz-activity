/**
 * 存入localStorage中的数据，通过vuex进行存取
 */
import { setStore, getStore, removeStore } from '@/utils/storage';

import localStorageMap from '../localStorageMap';

function initLocalStorage(store) {
  Object.keys(localStorageMap).forEach(key => {
    const localVal = getStore(localStorageMap[key]);
    console.log(key);
    if (localVal) store.commit(key, localVal);
  });
}

export default store => {
  initLocalStorage(store);
  store.subscribe(mutation => {
    const { type: vuexKey, payload } = mutation;
    const localKey = localStorageMap[vuexKey];
    if (localKey) {
      if (payload) setStore(localKey, payload);
      else removeStore(localKey);
    }
  });
};
