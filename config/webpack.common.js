const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

const paths = require('./paths')

const isProduction = process.env.NODE_ENV === 'production';
const target = isProduction ? 'browserslist' : 'web';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: `${paths.src}/index.html`,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new ESLintPlugin(),
  new PrettierPlugin(),
];

module.exports = {
  plugins,
  target,
  entry: `${paths.src}/index.tsx`,
  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env'],
                ],
              },
            },
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: isProduction ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /.yarn/,
      },
      {
        test: /\.jsx?$/,
        exclude: /.yarn/,
        use: [{
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            plugins: isProduction ? [] : 'react-refresh/babel',
          },
        }, 'eslint-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
}
