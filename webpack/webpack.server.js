const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const projectRoot = path.resolve(__dirname, '..');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
  // watch: true,
  target: 'node',
  entry: path.join(projectRoot, 'entry/entry-server.js'),
  output: {
    // 指定打包应用入口
    libraryTarget: 'commonjs2',
    filename: 'bundle.server.js',
  },
  // node端不用打包vue等依赖
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"',
    }),
    new VueServerPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
    },
  },
});
