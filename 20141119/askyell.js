var serveMessage = function (name, request, modifier) {
  return name + ": " + modifier(request);
};

var result = serveMessage('Bob','call me', function(request){
  return "Can you please " + request + "?";
});
console.log(result);
result = serveMessage('Bob','call me', function(request){
  return request.toUpperCase() + "!";
});
console.log(result);