// var randomPx = function () {
//   return Math.floor(Math.random() * 50) + 'px';
// };
// var moveButton = function() {
//   return $(".jumping-bean").offset().right;
// };
var randomPx = function () {
  return Math.floor(Math.random() * 100) + 'px';
};
var moveButton = function(){
  // return alert('hey');
  var x = randomPx();
  var y = randomPx();
  setTimeout(moveButton, 1000)
  return $('.jumping-bean').css({left:x,top:y});
};
$(document).on('click', '.jumping-bean', moveButton);