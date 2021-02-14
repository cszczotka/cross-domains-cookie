import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home.vue';
import Hub from './components/Hub.vue';
import Client from './components/Client.vue';
import ApiClient from './components/ApiClient.vue';
const appRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/hub', component: Hub },
    { path: '/client', component: Client },
    { path: '/', component: ApiClient }
  ]
});

Vue.config.productionTip = false

new Vue({
  router: appRouter,
  render: h => h(App),
}).$mount('#app')
