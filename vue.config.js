module.exports = {
  publicPath: './',
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://10.129.2.98:8080',
    disableHostCheck: true,
  }
};
