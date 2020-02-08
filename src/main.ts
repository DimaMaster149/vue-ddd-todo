import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import context from '@/plugins/context';
import contextMixin from '@/plugins/context';

// Vue.use(contextPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  mixins: [contextMixin],
  // context,
  render: h => h(App)
}).$mount('#app')
