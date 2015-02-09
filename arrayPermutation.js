/*You are given 2 arrays of the same length and a target value.
The sum of the two same indexes of an array must be greater than or equal to the target value.
*/

var x = [5,13,7];
var y = [8,9,10];

var switchSpots = function(arr, spot1, spot2) {
  var first = arr[spot1];
  var second = arr[spot2];
  arr.splice(spot1, 1, second);
  arr.splice(spot2, 1, first);
  return arr;
};

var test = function(arr1, arr2, x) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] >= x) {
      console.log('y');
    } else {
      console.log('n');
      if (arr1[i] + arr2[i + 1] >= x) {
        switchSpots(arr2, i, i + 1);
      } else if (arr1[i] + arr2[i + 2] >= x) {
        switchSpots(arr2, i, i + 2);
        if (arr1[i] + arr2[i] >= x) {
          console.log('y');
        }
      }
    }
  }
};

// test(x,y,15);

/*var i = 0;
var first = y[i];
var second = y[i+1];
y.splice(i,1,second);
y.splice(i+1,1,first);
console.log(y);*/


// console.log(switchSpots(y, 0, 2));