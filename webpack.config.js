/*
 * Source: https://medium.com/@paooolino/a-modern-javascript-project-setup-b7842955d1d3
 */
module.exports = {
  entry: './js/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
