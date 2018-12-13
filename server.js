/* server.js */
const exp = require('express');
const express = exp();
const PORT = 8080;
// const isDev = process.env.NODE_ENV === 'development';
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./dist/vue-ssr-server-bundle');
const clientManifest = require('./dist/vue-ssr-client-manifest');
const template = require('fs').readFileSync('./template.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});

express.use('/', exp.static(__dirname + '/dist'));

express.get('/api/getHome', (req, res) => {
  res.send('SSR server request');
});

// 响应路由请求
express.get('*', (req, res) => {
  const context = { url: req.url };
  renderer.renderToString(context, (err, html) => {
    if (err) return res.status(500).end('运行时错误');
    res.end(html);
  });
}, err => {
  if (err.code === 404) { res.status(404).end('所请求的页面不存在'); }
});

// 服务器监听地址
express.listen(PORT, () => {
  console.log(`服务器已启动！监听${PORT}端口`);
});
