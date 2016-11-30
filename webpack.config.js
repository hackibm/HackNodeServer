var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'components');

const config = {
  entry: APP_DIR + '/script.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/, exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] },
      },
      {
        test: /\.json$/,
        loader: 'json-loader' },
    ],
  },
};


module.exports = config;
