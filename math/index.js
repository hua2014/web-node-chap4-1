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

exports.factorial = factorial;
exports.fibonacci = fibonacci;
