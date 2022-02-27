module.exports = {
  publicPath: './',
  'transpileDependencies': [
    'vuetify'
  ],
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:8000'
    disableHostCheck: true,
  }
};
