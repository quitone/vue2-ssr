const path = require('path');

module.exports = {
  output: {
    clean: true,
    path: path.resolve('..', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {},
  plugins: [
  ]
}