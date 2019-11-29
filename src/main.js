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
