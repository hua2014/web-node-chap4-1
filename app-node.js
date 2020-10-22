let http_port = 8124;

let http = require('http');
let htutil = require('./htutil');

let server = http.createServer(function (req, res) {
  // 解析参数
  htutil.loadParams(req, res, function (req) {
    console.log('tag-req-params', req.a, req.b, req.requrl.pathname)
  });

  if (req.requrl.pathname === '/') {
    require('./home-node').get(req, res);
  } else if (req.requrl.pathname === '/square') {
    require('./square-node').get(req, res);
  } else if (req.requrl.pathname === '/mult') {
    require('./mult-node').get(req, res);
  } else if (req.requrl.pathname === '/factorial') {
    require('./factorial-node').get(req, res);
  } else if (req.requrl.pathname === '/fibonacci') {
    // require('./fibonacci-node').get(req, res);
    require('./fibo2-node').get(req, res);
  } else {
    // 404 状态码 指示页面不存在
    res.writeHead(404, {
      'Content-Type': 'text/plain;charset=UTF-8',
    });
    res.end("bad URL/页面不存在 " + req.url);
  }
});

server.listen(http_port, `127.0.0.1`);
console.log(`Listening to http://localhost:${http_port}/`);