'use strict'
var webpack = require('webpack');
var HtmlWebbpcakPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function makeConfig() {

  const config = {};

  config.entry = __dirname + '/client/app/app.jsx';

  config.output = {
    path: __dirname + '/client/dist',
    filename: '[name].[hash].js'
  };

  config.resolve = {
    extensions: ['.js', '.jsx']
  };

  config.devtool = 'eval-source-map';

  config.module = {
    rules: [

      {
        test: /\.jsx?$/,
        use: {
          'loader': 'babel-loader',
          options: {
            'presets': ['env', 'react']
          }
        },
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      },

      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      }

    ]
  }

  config.plugins = [
    
    new HtmlWebbpcakPlugin({
      template: __dirname + '/client/public/index.html',
      inject: 'body'
    }),

    new CopyWebpackPlugin([{
      from: __dirname + '/client/public'
    }]),

    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })

  ]

  config.devServer = {
    contentBase: './client/public',
    open: true,
    overlay: true,
    status: 'minimal'
  }

  return config

}();
