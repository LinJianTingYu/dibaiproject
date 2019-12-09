const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://2336h50i91.iask.in',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }))
}