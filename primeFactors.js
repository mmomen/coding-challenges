var primeChecker = function(num) {
  var x = 0;
  for (var i = 0; i<num; i++){
    if (num % i === 0) {
      x++;
    }
  }
  if (x === 1) {
    return true;
  } else {
    return false;
  }
};

/*var primeFactors = function(num) {
  var x = [];
  for (var i = num - 1; i<num; i--) {
    if (num % i === 0) {
      if (primeChecker(i)) {
        x.push(i);
      } else {
        for (var y = i - 1; y<i; y--) {
          if (i % y === 0) {
            x.push(y,y);
          } else if (primeChecker(y)) { 
            x.push(y);
          }
        }
      }
    }
  }
  return x;
};*/

var primeFactors = function(num) {
  var x = {
    pf: primes,
    justF: factors
  };
  var primes = [];
  var factors = [];
  for (var i = 0; i<num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};