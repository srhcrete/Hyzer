const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    main: path.join(__dirname, 'front-end', 'index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ['react', 'es2015'] // Transpiles JSX and ES6
            }
          }
        ]
      },
      {
        test: /\.(scss)?$/,
        use: [
          // {
          //   loader: "style-loader" // creates style nodes from JS strings
          // },
          // {
          //   loader: "css-loader" // translates CSS into CommonJS
          // },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
        ],
      },
    ],
  },
};
