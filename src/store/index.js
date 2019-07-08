import Vue from 'vue';
import Vuex from 'vuex';
import modules from './moduls';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
