const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/", "app.js"),
  output: {
    path: path.join(__dirname, "/bundled/"),
    publicPath: "http://localhost:8080/assets/",
    filename: "app.bundle.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    }],
  },
  devtool: "eval-source-map",
};
