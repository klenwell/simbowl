/*
 * Source: https://medium.com/@paooolino/a-modern-javascript-project-setup-b7842955d1d3
 */
module.exports = {
  entry: {
    // [name]: entry path
    'sumobo.bundle.js': __dirname + '/js/app.js',
  },
  output: {
    path: __dirname + '/build',
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    publicPath: '/build/',
    compress: true,
    port: 9000
  }
}
