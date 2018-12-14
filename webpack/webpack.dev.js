const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const isDev = process.env.NODE_ENV === 'development';
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  proxy: {},
  hot: true,
};

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new HTMLPlugin({
    template: path.join(__dirname, '../src/template.html'),
  }),
];

const config = merge(baseConfig,{
  entry: path.join(__dirname, '../entry/entry-client.js'),
  output: {
    filename: 'bundle.[hash:8].js',
  },
  devServer,
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]),
});

module.exports = config;
