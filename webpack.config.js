const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv').config();

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'gamergg.bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    // host: 'localhost',
    // contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    // compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  module: {
    rules: [
      {
        // /jsx?&/
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /.(css|scss)$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', "sass-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
}