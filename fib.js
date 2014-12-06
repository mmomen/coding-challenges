var genFib = function(maxNum) {
  var newStart = [0,1];
  for (var i = 2; i < maxNum; i++) {
    newStart.push(newStart[i-2] + newStart[i-1]);
  }
  return newStart;
};

var fib = function(numFind) {
  x = genFib(100);
  return x[numFind];
};

var fibList = function(numUpTo) {
  x = genFib(100);
  var len = x.length;
  var arr = [];
  for (var i = 0; i<len; i++) {
    if (x[i] <= numUpTo) {
      arr.push(x[i]);
    }
  }
  return arr;
};

//recursive function:
/*var fib2 = function(x) {
  if (x>1) {
    x = fib(x-1) + fib(x-2);
  }
  return x;
};*/