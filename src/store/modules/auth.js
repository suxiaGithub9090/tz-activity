import { SET_TOKEN } from '../types';

const authState = {
  token: '',
};

const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token;
  },
};
export default {
  state: authState,
  mutations,
};
