const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: '/',

  configureWebpack: {
    // externals: {
    //   AMap: 'AMap'
    // },
    plugins: [
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'vue',
            entry: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' : 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
            global: 'Vue'
          },
          //   {
          //     module: 'echarts',
          //     entry: 'https://cdn.bootcdn.net/ajax/libs/echarts/4.2.1/echarts-en.common.js',
          //     global: 'echarts'
          //   },
          {
            module: 'cube-ui',
            entry: 'https://unpkg.com/cube-ui/lib/cube.min.js',
            global: 'cube-ui'
          },
          {
            module: 'vue-router',
            entry: 'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.3/vue-router.min.js',
            global: 'VueRouter'
          },
          {
            module: 'vuex',
            entry: 'https://cdn.bootcdn.net/ajax/libs/vuex/3.0.1/vuex.min.js',
            global: 'Vuex'
          },
          //   {
          //     module: 'video.js',
          //     entry: 'https://cdn.bootcdn.net/ajax/libs/video.js/7.6.6/alt/video.core.js',
          //     global: 'videojs'
          //   },
          {
            module: 'element-ui',
            entry: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.12.0/index.js',
            global: 'ELEMENT'
          }
        //   {
        //     module: 'videojs-contrib-hls',
        //     entry: 'https://cdn.bootcdn.net/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.js',
        //     global: 'videojsContribHls'
        //   },
        //   {
        //     module: 'ali-oss',
        //     entry: 'https://cdn.bootcdn.net/ajax/libs/ali-oss/6.9.1/aliyun-oss-sdk.min.js',
        //     global: 'OSS'
        //   }
        ]
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名
        threshold: 10240, // 对10K以上的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets: false// 是否删除源文件
      })
    ]

  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
