import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// to bring bootstrap library
import 'bootstrap/dist/css/bootstrap.css'
// to bring javascript files in bootstrap
import 'bootstrap'
import './assets/css/styles.css'
import BootstrapVue from 'bootstrap-vue';

import FlashMessage from '@smartweb/vue-flash-message';

import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);

Vue.use(FlashMessage, {
  messageOptions: {
    timeout: 1000,
    important: true,
    autoEmit: false,
    pauseOnInteract: true
  }
});


require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// utilise the browser parsing
Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
