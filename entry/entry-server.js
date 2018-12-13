import { createApp } from '../src/main';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) return reject({ code: 404 });
      // 数据预取
      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData(app.$store);
        }
      })).then(() => {
        context.state = app.$store.state;
        resolve(app);
      }).catch(reject);
    });
  });
}
