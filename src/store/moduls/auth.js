import { writeCookie, readCookie } from '@/utils/storage';
import { SET_LOGIN } from '../types';

const TOKEN = 'token';
const cookieExpirse = 7;
const authState = {
  token: (() => {
    const cookieToken = readCookie(TOKEN); // pc token存在了cookie中
    return cookieToken;
  })(),
};

const mutations = {
  [SET_LOGIN](state, token) {
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
