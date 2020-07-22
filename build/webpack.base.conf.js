const path = require('path');
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  config: path.join(__dirname, '../'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  resolve: {
    alias: {
      '~': 'src',
    }
  },
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src, // Потому что можно писать не путь к файлу как было ('./src/index.js') а просто к папке где лежит индекс.джс ('./src/'), а он уже есть в константе PATHS
    // lk: `${PATHS.src}/lk.js`// Для образец для дополнительной точки входа
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist ,
    publicPath: '/' 
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]' //[ext] = (png|jpg|gif|svg) (одно из)
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]' //[ext] = (png|jpg|gif|svg) (одно из)
        }
      },
      {
        test: /\.scss$/,
        use: [ //В масив use лучше передавать данные объектами (типо в скобочках {})
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true } // sourceMap - Это карта сайта(?) options:{} - это конфигурация "css-loader"
          },{
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: `${PATHS.config}/postcss.config.js`} } // sourceMap - Это карта сайта(?) options:{} - это конфигурация "css-loader"
          },{
            loader: "sass-loader",
            options: { sourceMap: true } // sourceMap - Это карта сайта(?) options:{} - это конфигурация "css-loader"
          },
        ]
      },
      {
      test: /\.css$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true } // sourceMap - Это карта сайта(?) options:{} - это конфигурация "css-loader"
        },
        {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: `${PATHS.config}/postcss.config.js`}} // sourceMap - Это карта сайта(?) options:{} - это конфигурация "css-loader"
        }
      ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },],
  },
  "plugins": [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
      { from: `${PATHS.src}/images`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
      ]
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ],
}