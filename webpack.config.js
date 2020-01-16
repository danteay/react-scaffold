const path = require('path');
const mapp = require('./mapp.config');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackLoggingPlugin = require('webpack-logging-plugin');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const CompressionWebpackPlugin = require('compression-webpack-plugin');


let plugins = [
  new MiniCssExtractPlugin({
    filename: mapp.assetResourceName + '.css',
  }),
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, mapp.assetPath + '/index.html'),
    template: path.resolve(__dirname, mapp.htmlTemplatePath),
  }),
  new WebpackLoggingPlugin({
    formatError: err => err,
    formatStats: stats => formatWebpackMessages(stats.toJson({}, true)),
    successCallback: () => console.log(`App is running at: http://localhost:${mapp.port}/`),
  }),
  new BabelMinifyPlugin(),
  new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
  }),
];

if (mapp.staticFolderName) {
  plugins.push(new CopyWebpackPlugin([{
    from: 'src/' + mapp.staticFolderName,
    to: mapp.staticFolderName
  }]));
}

module.exports = {
  target: 'web',
  entry: [path.resolve(__dirname, mapp.entry)],
  output: {
    path: path.join(__dirname, mapp.assetPath),
    publicPath: mapp.assetPublicPath,
    filename: mapp.assetResourceName + '.js',
  },
  plugins: plugins,
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      'mapp-data': path.resolve(__dirname, mapp.dataFolderPath),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
    modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'libs'), path.join(__dirname, 'src')],
    extensions: ['.jsx', '.js'],
    symlinks: false,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    contentBase: [path.join(__dirname, mapp.assetPath)],
    inline: true,
    compress: false,
    https: mapp.https,
    host: '0.0.0.0',
    port: mapp.port,
    publicPath: '/',
    disableHostCheck: true,
    historyApiFallback: {
      index: '/index.html',
    },
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx|vue|ts|tsx|mjs)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test'),
          path.resolve(__dirname, 'libs'), // libs may need compiling
        ],
        exclude: [path.resolve(__dirname, 'src/static')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                [
                  'fast-async',
                  {
                    spec: true,
                  },
                ],
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-object-rest-spread',
                'babel-plugin-syntax-dynamic-import',
                [
                  'babel-plugin-transform-react-jsx',
                  {
                    pragma: 'h',
                  },
                ],
                [
                  'babel-plugin-jsx-pragmatic',
                  {
                    module: 'preact',
                    export: 'h',
                    import: 'h',
                  },
                ],
                [
                  '@babel/plugin-proposal-class-properties',
                  {
                    spec: true,
                  },
                ],
              ],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    modules: false,
                    exclude: ['transform-regenerator', 'transform-async-to-generator'],
                    targets: '> 0.1%, not dead',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'libs')],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  // target: 'web',
  // entry: [
  //   SRC_DIR + '/index.jsx',
  // ],
  // output: {
  //   path: DIST_DIR,
  //   filename: 'bundle.js',
  //   publicPath: '/'
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader'
  //       }
  //     },
  //     {
  //       test: /\.(html)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'html-loader',
  //         options: {minimize: true}
  //       }
  //     },
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: [
  //         // Creates `style` nodes from JS strings
  //         'style-loader',
  //         // Translates CSS into CommonJS
  //         'css-loader',
  //         // Compiles Sass to CSS
  //         'sass-loader',
  //       ],
  //     },
  //   ]
  // },
  // resolve: {
  //   alias: {
  //     src: path.resolve(__dirname, 'src/'),
  //     react: 'preact/compat',
  //     'react-dom': 'preact/compat',
  //   },
  //   modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'libs'), path.join(__dirname, 'src')],
  //   extensions: ['.jsx', '.js'],
  //   symlinks: false,
  // },
  // plugins: plugins,

  // devServer: {
  //   contentBase: [DIST_DIR],
  //   inline: true,
  //   compress: false,
  //   https: false,
  //   host: '0.0.0.0',
  //   port: 3000,
  //   publicPath: '/',
  //   disableHostCheck: true,
  //   historyApiFallback: {
  //     index: '/index.html',
  //   },
  //   watchContentBase: true,
  //   watchOptions: {
  //     poll: true,
  //     ignored: /node_modules/,
  //   },
  //   stats: {
  //     colors: true,
  //     hash: false,
  //     version: false,
  //     timings: true,
  //     assets: true,
  //     chunks: false,
  //     modules: false,
  //     reasons: false,
  //     children: false,
  //     source: false,
  //     errors: true,
  //     errorDetails: true,
  //     warnings: false,
  //     publicPath: true,
  //   },
  // },
}