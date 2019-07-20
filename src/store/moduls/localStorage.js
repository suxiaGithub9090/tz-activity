import { SET_LOCALTEST } from '../types';

const states = {
  localTest: false,
};

const mutations = {
  [SET_LOCALTEST](state, localTest) {
    state.localTest = localTest;
  },
};

export default {
  state: states,
  mutations,
};
