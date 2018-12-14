const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const projectRoot = path.resolve(__dirname, '..');
const baseConfig = require('./webpack.base');
const VueClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
  entry: path.join(projectRoot, 'entry/entry-client.js'),
  output: {
    filename: 'bundle-client.js',
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'mainfest',
    //   minChunks: Infinity
    // }),
    new VueClientPlugin(),
  ],
});

