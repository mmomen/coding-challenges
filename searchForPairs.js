var searchPairs = function(array, num) {
  var ans = [];
  array.forEach(function(e,i) {
    var sexyNum = num - e;
    console.log(sexyNum);
    var sexySpot = array.indexOf(sexyNum)
    var obj = {};
    if (sexySpot !== undefined) {
      obj[e] = array[sexySpot];
    }
    ans.push(obj);
/*    array.forEach(function(ee, ii) {
      if (((e + ee) === num) && (i !== ii)) { //prevent adding same array item
        var obj = {};
        obj[e] = ee;
        ans.push(obj);
      }
    });*/
  });
  return ans;
};

var array = [10, 20, 30, 50, 500, 500, 100, 970, 980, 990];
var pairs = searchPairs(array, 1000);
console.log(pairs);