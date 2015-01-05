// input string
// output t/f

// check first+ vs -last of string
// if false, return false
// if true, keep checking

var palCheck = function(str) {
  var arr = str.split("");
  var len = arr.length / 2; // check only once (full length will cause it to check twice, up and down)
  var lastIndex = arr.length - 1;
  for (i = 0; i < len; i++) {
    if (arr[i] !== arr[lastIndex]) {
      return false;
    }
    lastIndex--;
  }
  return true;
};