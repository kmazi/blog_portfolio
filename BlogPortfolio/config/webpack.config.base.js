var path = require("path")

module.exports = {
  context: __dirname,

  entry: '../../portfolio/static/portfolio/js/entry',

  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    // add all common plugins here
  ], 

  module: {
    rules: [
      // common loaders
    ]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}