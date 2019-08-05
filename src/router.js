import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/m/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './pages/home'),
    },
    {
      path: '/p/home',
      name: 'homePc',
      component: () => import(/* webpackChunkName: "homePc" */ './pages/homePc'),
    },
    {
      path: '/m/activity',
      name: 'activity',
      component: () => import(/* webpackChunkName: "activity" */ './pages/activity'),
    },
    {
      path: '/p/bargin',
      name: 'bargin',
      component: () => import(/* webpackChunkName: "activity" */ './pages/bargin'),
    },
  ],
});
