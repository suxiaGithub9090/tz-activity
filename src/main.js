import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import plugins from './plugins'; // 自定义插件
import './utils/routerControl'; // 路由控制

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
