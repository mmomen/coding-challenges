var str = "aaaaabb"

var compress = function(str) {
  var len = str.length;
  var first = str.charAt(0);
  var next = function(index) {
    for (var i=0,count=0; i<len; i++) {
      if (first === str.charAt(i)) {
        count++;
      }
    }
  }
}