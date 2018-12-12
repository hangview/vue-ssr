const path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  // watch: true,
  // 指定打包目标环境
  target: 'node',
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-server.js')],
  // devtool: 'source-map',
  output: {
    // 指定打包应用入口
    libraryTarget: 'commonjs2',
    filename: 'bundle.server.js',
    path: path.join(projectRoot, 'dist'),
  },
  // node端不用打包vue等依赖
  // externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
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
  plugins: [],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
    },
  },

};
