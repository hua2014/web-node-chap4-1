const htutil = require('../htutil')
var math = require('../math')


let sendResult = function(req,res,a,result){
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8',
  });

  let isNumberResult = !isNaN(result);

  let resultShowContent = isNumberResult ? `
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
}

let get = function (req, res) {
  let a = req.a;
  let isNumberOperation = !isNaN(a);
  math.fibonacciAsync(Math.floor(a), function(result){
    if(isNumberOperation){
      sendResult(req,res,a,result);
    }else{
      sendResult(req,res,NaN,NaN);
    }
  });
};

exports.get = get;