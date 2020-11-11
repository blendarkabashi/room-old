import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './assets/styles/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrettyCheckbox from 'pretty-checkbox-vue';
import 'simplebar/dist/simplebar.min.css';

Vue.use(PrettyCheckbox);

Vue.use(VueAxios,axios)

Vue.axios.defaults.baseURL = 'http://localhost:1337/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
