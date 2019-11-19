const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    alias: {
      layouts: path.resolve(__dirname, './src/layouts/'),
      scenes: path.resolve(__dirname, './src/scenes/'),
      core: path.resolve(__dirname, './src/core/'),
      pods: path.resolve(__dirname, './src/pods/'),
      'common-app': path.resolve(__dirname, './src/common-app/'),
      common: path.resolve(__dirname, './src/common/'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: ['./index.tsx'],
  devtool: 'source-map',
  devServer: {
    port: 8080,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
          babelCore: '@babel/core', // needed for Babel v7
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new CheckerPlugin(),
  ],
};
