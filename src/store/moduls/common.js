import { SET_CALCUREM } from '../types';

const states = {
  calcuRem: false,
};

const mutations = {
  [SET_CALCUREM](state, calcuRem) {
    state.calcuRem = calcuRem;
  },
};

export default {
  state: states,
  mutations,
};
