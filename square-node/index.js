const htutil = require('../htutil')

let get = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  let a = req.a;
  let isNumberOperation = !isNaN(a);
  let result = a * a;
  let resultShowContent = isNumberOperation ? `
    <p class="result">${a} ^ 2 = ${result}</p>
  ` : '';

  res.end(htutil.page("Square", htutil.navbar(), `
    ${resultShowContent}
    <p>Enter numbers to square</p>
    <form name="square" action="/square" method="get">
      A: <input type="text" name="a" /><br/>
      <br/>
      <input type="submit" value="Submit" /><br/>
    </form>
  `));

};

exports.get = get;