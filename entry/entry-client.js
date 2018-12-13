import { createApp } from '../src/main';

const { app,router,store } = createApp();
if(window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// 客户端数据预取
router.onReady(() => {
  setTimeout(()=> {
    app.$mount('#app');
    console.log('客户端 bundle工作了!');
  },5000)
});

