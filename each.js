var forEach = function (arr,callback){
  for (i=0;i<arr.length;i++){
    callback(arr[i]);
  }
};

var stuff = [1,2,3,4];
var length = stuff.length;
forEach(stuff, function(item){
  console.log(item * 2);
});

console.log(stuff);