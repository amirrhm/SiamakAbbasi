import VueRouter from 'vue-router';

window.router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base:'/',
  routes: [
    // {path: '/', redirect: '/'},
    {
      path: '/auth/',
      component: require('./components/pages/auth/auth.vue'),
      children: [
        {
          path: 'login/',
          component: require('./components/pages/auth/login.vue'),
        },
        {
          path: 'register/',
          component: require('./components/pages/auth/register.vue'),
        }
      ],
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  },
});