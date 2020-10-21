const htutil = require('../htutil')
var math = require('../math')

let get = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  let a = req.a;
  let isNumberOperation = !isNaN(a);
  let result = math.factorial(Math.floor(a));
  let resultShowContent = isNumberOperation ? `
    <p class="result">${a} factorial = ${result}</p>
  ` : '';

  res.end(htutil.page("Factorial", htutil.navbar(), `
    ${resultShowContent}
    <p>Enter numbers to factorial</p>
    <form name="factorial" action="/factorial" method="get">
      A: <input type="text" name="a" /><br/>
      <br/>
      <input type="submit" value="Submit" /><br/>
    </form>
  `));

};

exports.get = get;