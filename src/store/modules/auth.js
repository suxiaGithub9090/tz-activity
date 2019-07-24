import { writeCookie, readCookie } from '@/utils/storage';
import { SET_TOKEN } from '../types';

const TOKEN = 'token';
const cookieExpirse = 7; // cookie有效期
const authState = {
  token: (() => {
    const cookieToken = readCookie(TOKEN); // pc token存在了cookie中 , h5 通过query 传递
    return cookieToken;
  })(),
};

const mutations = {
  [SET_TOKEN](state, token) {
    if (token) {
      state.token = token;
      writeCookie(TOKEN, token, cookieExpirse);
    }
  },
};
export default {
  state: authState,
  mutations,
};
