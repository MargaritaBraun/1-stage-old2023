const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    mode: 'development',
    output: {
        path: path.join(__dirname, '/src'),
      filename: "main.js"
    },

    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
  ],

    watchOptions: {
        aggregateTimeout: 600,
      },

  }