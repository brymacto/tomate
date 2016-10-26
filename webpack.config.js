const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/", "app.js"),
  output: {
    path: path.join(__dirname, "/bundled/"),
    publicPath: "/assets/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};