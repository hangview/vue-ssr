const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  // historyApiFallback: {
  //   index: '/dist/index.html',
  // },
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
  // new VueClientPlugin()
];

const config = {
  target: 'web',
  entry: path.join(__dirname, '../entry/entry-client.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist'),
  },
  devServer,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]),
};

module.exports = config;
