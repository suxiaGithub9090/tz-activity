import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from './modules';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules,
  plugins: [
    createPersistedState({
      key: 'localStorage',
      paths: ['localStorage'],
    }),
  ],
});
