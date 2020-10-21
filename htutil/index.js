const url = require('url');

// 参数解析
let loadParams = function (req, res, next) {

  req.requrl = url.parse(req.url, true);
  // 进行参数的 空校验 和数字校验
  req.a = (req.requrl.query.a && !isNaN(req.requrl.query.a)) ? new Number(req.requrl.query.a) : NaN;
  req.b = (req.requrl.query.b && !isNaN(req.requrl.query.b)) ? new Number(req.requrl.query.b) : NaN;

  if (next) {
    next(req);
  }

};

// 页面布局-navbar
let navbar = function () {
  return `
    <div class="navbar">
      <p><a href='/'>home</a></p>
      <p><a href='/square'>square</a></p>
      <p><a href='/mult'>mult</a></p>
      <p><a href='/factorial'>factorial</a></p>
      <p><a href='/fibonacci'>fibonacci</a></p>
    <div>
  `
}
// 页面布局-page
let page = function (title, navbar, content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${title}</title>
    <style>
    td{
      border:1px solid #aaa;
    }
    </style>
  </head>
  <body>
    <h1>{{title}}</h1>
    <table>
      <tr>
        <td>${navbar}</td>
        <td>${content}</td>
      </tr>
    </table>
  </body>
  </html>
  `.replace("{{title}}", title, 'g') //使用正则替换
}

exports.loadParams = loadParams;
exports.navbar = navbar;
exports.page = page;