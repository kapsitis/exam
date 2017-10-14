var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')
var WEBAPP_DIR = path.resolve(__dirname + '/src/main/webapp')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: WEBAPP_DIR, 
    filename: 'bundle.js', 
    publicPath: '/'
  },
  
/*
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: WEBAPP_DIR, 
    port: 3333
  },
*/
  
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }, 
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}

module.exports = config


