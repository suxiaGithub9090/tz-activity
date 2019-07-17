import Vue from 'vue';
import Vuex from 'vuex';
import localStore from './plugin/localStore';
import modules from './moduls';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules,
  plugins: [localStore],
});
