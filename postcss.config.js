module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7']
    })
  ]
}