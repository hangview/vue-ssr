const path = require('path');
const webpack = require('webpack');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  output: {
    filename: 'bundle.client.js',
    path: path.join(projectRoot, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // enable CSS extraction
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },

    ],
  },
  plugins: [
  ],
  resolve: {
  },
};
