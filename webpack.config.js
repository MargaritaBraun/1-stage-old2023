const path = require('path');
module.exports = {
    entry: "./index.js",
    mode: 'development',
    output: {
      filename: "main.js"
    },

    watchOptions: {
        aggregateTimeout: 600,
      },
  }