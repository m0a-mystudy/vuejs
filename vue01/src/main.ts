import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import * as Vuex from 'vuex';

import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ListComponent } from './components/list/list';
import { NavbarComponent } from './components/navbar/navbar';

// register the plugin
Vue.use(VueRouter);
Vue.use(Vuex);

(window as any).store = new Vuex.Store({
  state: {
    count: 0,
    env: process.env.NODE_ENV
  },
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    isOdd: state => {
      return state.count % 2 === 0;
    },
    isEven: (state, getters) => {
      return !getters.isOdd(state);
    }
  }
});

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/list', component: ListComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
