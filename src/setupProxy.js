const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/base",proxy({
    target: 'http://localhost:8000',
    changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
    // pathRewrite: {
    //     '^/api' : '/',     // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
    // },
}));
};