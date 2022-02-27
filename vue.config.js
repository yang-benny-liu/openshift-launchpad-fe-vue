module.exports = {
  publicPath: './',
  'transpileDependencies': [
    'vuetify'
  ],
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://openshift-launchpad-fe-vue.appdemo.svc.cluster.local:8000'
    disableHostCheck: true,
  }
};
