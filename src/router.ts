import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { isPc } from '@/utils';

import MobileHome from '@/views/mobile/mobileHome/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: isPc() ? '/about' : '/mobileHome',
    },
    {
      path: '/mobileHome',
      name: 'mobileHome',
      component: MobileHome,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
