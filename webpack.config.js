var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'components')

var config = {
  entry : APP_DIR + "/script.jsx",
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/, exclude: /node_modules/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {presets: ['react','es2015']}
      }
    ]
  }
};



module.exports = config;
