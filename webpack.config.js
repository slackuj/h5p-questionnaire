var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    '../dist/dist': "./src/entries/dist.js",
    'dev': "./src/entries/dev.js"
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/content"),
          path.resolve(__dirname, "src/scripts"),
          path.resolve(__dirname, "src/entries")
        ],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src/content")
        ],
        loader: "style!css!postcss"
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src/scripts")
        ],
        loader: "style!css!postcss?sourceMap=inline"
      },
      {
        test: /\.json$/,
        include: path.resolve(__dirname, "src/content"),
        loader: 'json'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8050,
    contentBase: "./build",
    quiet: true
  }
};
