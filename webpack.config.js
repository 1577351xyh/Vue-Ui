const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: './src/app',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.vue$/i, use: 'vue-loader' },
      //css
      {
        test: /\.css$/i, use: ['vue-style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')
            ]
          }
        }]
      },
      //less
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
  devServer: {//开发服务器的配置
    //端口号配置，默认为8080
    port: 3000,
    //进度条
    progress: true,
  },

  resolve: {
    // 设置别名
    alias: {
      '@': resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  }
}