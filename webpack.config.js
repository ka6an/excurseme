const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        resolve: {
          extensions: ['.jsx', '.js']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            resourceQuery: /^\?raw$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]'
                  }
                }
              },
              'postcss-loader'
            ]
          },
          {
            test: /\.s?css/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: isDev ? '[name]__[local]___[hash:base64:5]' : '[name]__[local]'
                  }
                }
              },
              'postcss-loader'
            ]
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
      path: path.resolve(__dirname, '/dist')
    }),
    new CopyWebpackPlugin([
      {
        from: `${path.join(__dirname, '/assets/images')}`,
        to: `${path.join(__dirname, '/dist')}/assets/images`
      },
      {
        from: `${path.join(__dirname, '/assets/fonts')}`,
        to: `${path.join(__dirname, '/dist')}/assets/fonts`
      }
    ])
  ],
  devServer: {
    https: true,
    // Stars (*) in '/**/**/**/' represent network request queries, like '/guide-profile/guide/4'. Proxy forms request like 'https://api.excurse.me/guide/4'. Required only for development mode
    proxy: {
      '/**/**/**': {
        target: 'https://api.excurse.me',
        changeOrigin: true,
        secure: true
      }
    },
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    progress: true,
    port: 3333,
    open: true,
    historyApiFallback: true,
    stats: 'minimal'
  }
};
