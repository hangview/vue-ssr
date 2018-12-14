import Vue from 'vue';
import createRouter from './route';
import createStore from './store';
import App from './App.vue';

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    store,
    router,
    render: h => h(App),
  });
  return {
    app,
    router,
    store,
  };
}
