const htutil = require('../htutil')

let get = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  let a = req.a;
  let b = req.b;
  let isNumberOperation = !isNaN(a) && !isNaN(b);
  let result = req.a * req.b;
  let resultShowContent = isNumberOperation ? `
    <p class="result">${a} * ${b} = ${result}</p>
  ` : '';

  res.end(htutil.page("Mult", htutil.navbar(), `
    ${resultShowContent}
    <p>Enter numbers to mult</p>
    <form name="mult" action="/mult" method="get">
      A: <input type="text" name="a" /><br/>
      B: <input type="text" name="b" /><br/>
      <br/>
      <input type="submit" value="Submit" /><br/>
    </form>
  `));

};

exports.get = get;