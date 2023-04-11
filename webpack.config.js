const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
      },

      mode: 'development',
      plugins: [new HtmlWebpackPlugin()],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                }
              }
            ]
          },

          {
            test: /\.svg$/,
            loader: 'svg-inline-loader?classPrefix'
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
      }
  }