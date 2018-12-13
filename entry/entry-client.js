import { createApp } from '../src/main';

const { app } = createApp();
if(window.__INITIAL_STATE__) {
  console.log(window.__INITIAL_STATE__);
  app.$store.replaceState(window.__INITIAL_STATE__);
}

window.onload = function () {
  setTimeout(()=> {
    app.$mount('#app');
    console.log('客户端 bundle工作了');
    },5000)
  // app.$mount('#app');
};
