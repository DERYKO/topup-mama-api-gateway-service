import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './data/store'
import './assets/css/main.css'
Vue.config.productionTip = false
import {
    Message,
    Loading,
    MessageBox
} from 'element-ui';
Vue.prototype.$message = Message;
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$ELEMENT = {size: 'medium', zIndex: 3000};

Vue.prototype.$confirm = MessageBox.confirm;

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
