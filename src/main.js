import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import axiosPlugin from '../plugins/axios';

Vue.config.productionTip = false

Vue.use(axiosPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
