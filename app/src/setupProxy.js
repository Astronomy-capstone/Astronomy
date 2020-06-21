const proxy = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(proxy('/apis', {
      logLevel: 'debug',
      target: "http://165.227.63.163:8080/",
        changeOrigin: true,
          }
  ));
};