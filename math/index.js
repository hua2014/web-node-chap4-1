let factorial = function (n) {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * factorial(n - 1);
  } else {
    return NaN;
  }
}

let fibonacci = function (n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else if (n > 0) {
    return fibonacci(n - 1) + fibonacci(n - 2)
  } else {
    return NaN;
  }
}

let fibonacciAsync = function (n, done) {
  if (n === 1) {
    done(1);
  } else if (n === 2) {
    done(1);
  } else if (n > 0) {
    // process.nextTick方法将一个递归函数转换成各个步骤都由事件循环分派
    // 这个函数通过事件循环调用回调函数，确保函数能快速进入事件循环
    process.nextTick(function (){
      fibonacciAsync(n-1, function(val1){
        process.nextTick(function (){
          fibonacciAsync(n-2, function(val2){
            done(val1 + val2);
          });
        });
      });
    });
  } else {
    done(NaN);
  }
}

exports.factorial = factorial;
exports.fibonacci = fibonacci;
exports.fibonacciAsync = fibonacciAsync;
