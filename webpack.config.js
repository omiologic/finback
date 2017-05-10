'use strict'

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    },{
        test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
