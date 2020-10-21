const htutil = require('../htutil')
var math = require('../math')

let get = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  let a = req.a;
  let isNumberOperation = !isNaN(a);
  let result = math.fibonacci(Math.floor(a));
  let resultShowContent = isNumberOperation ? `
    <p class="result">${a} factorial = ${result}</p>
  ` : '';

  res.end(htutil.page("Fibonacci", htutil.navbar(), `
    ${resultShowContent}
    <p>Enter numbers to fibonacci</p>
    <form name="fibonacci" action="/fibonacci" method="get">
      A: <input type="text" name="a" /><br/>
      <br/>
      <input type="submit" value="Submit" /><br/>
    </form>
  `));

};

exports.get = get;