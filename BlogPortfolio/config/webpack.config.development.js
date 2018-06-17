var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var config = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// Use webpack dev server
config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  '../../portfolio/static/portfolio/js/entry'
]

config.mode = "development"

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/'

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),  
  // new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats.json'}),
  new webpack.SourceMapDevToolPlugin({filename: '[file].map'}),
])

// Add a loader for JSX files with react-hot enabled
config.module.rules.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
  
  //Probably a good idea to pick one
  //vanilla CSS
  {test: /\.css$/, loader: "style-loader!css-loader?root=."},

  //sass
  { test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass-loader" }

)

module.exports = config