module.exports = {
  entry: './src/app.js',
  output: {
    path: './bundled',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};