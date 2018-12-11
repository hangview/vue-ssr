import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  let router = new VueRouter({
    mode: 'history',
    routes: [
      {
        alias: '/',
        path: '/home',
        component: require('./routes/home.vue'),
      },
      {
        path: '/hotel',
        component: require('./routes/hotel.vue'),
      },
      {
        path: '/ticket',
        component: require('./routes/ticket.vue'),
      },
    ],
  });
  return router;
}
