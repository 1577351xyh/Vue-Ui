const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = function (env, argv) {
  env = env || {}
  let config = null

  if (env.production) {
    // 线上环境
    config = require('./config/webpack.production');
  } else if (env.development) {
    // 开发环境
    config = require('./config/webpack.development');
  } else {
    //测试环境
    config = require('./config/webpack.test');
  }
  return {
    entry: './src/app.js',
    module: {
      rules: [
        // vue 
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
        //images
        // {test: /.(png|jpg|gif)$/i, use: {
        //   loader: 'url-loader',
        //   options: {
        //     outputPath: 'imgs/',
        //     limit: 4*1024
        //   }
        // }},

        // //fonts
        // {test: /\.(eot|svg|ttf|woff|woff2)$/i, use: {
        //   loader: 'url-loader',
        //   options: {
        //     outputPath: 'fonts/',
        //     limit: 4*1024
        //   }
        // }},
      ]
    },
    devServer: {//开发服务器的配置
      //端口号配置，默认为8080
      port: 3000,
      //进度条
      progress: true,
    },
    ...config,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      }
    },
  }

}