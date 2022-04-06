const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? '/' : '/quizlet/',
  outputDir: isProduction ? `${__dirname}/lib` : `${__dirname}/demo`,
  css: {
    extract: true
  }
}
