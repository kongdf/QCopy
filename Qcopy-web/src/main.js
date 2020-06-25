import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/index.css'
Vue.use(ElementUI);
import md5 from 'md5';
Vue.prototype.$md5 = md5;
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')