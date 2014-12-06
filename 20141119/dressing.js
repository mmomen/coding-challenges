

// TODO:
var yell = function(arg) {
  return arg.toUpperCase();
};
var ask = function(arg) {
  return "Can you please " + arg + "?";
};
var serveMessage = function(a, b, f){
  return a + ": " + f(b)
};

describe('yell', function () {
  it("yells out its argument", function () {
    var result = yell("what?");
    expect(result).toEqual("WHAT?!");
  })
});

describe('ask', function () {
  it("asks its argument in the form of a question", function () {
    var result = ask("open the door");
    expect(result).toEqual("Can you please open the door?");
  })
});

describe('serveMessage', function () {
  it("asks Bob to call", function () {
    var result = serveMessage('Bob','call me', ask);
    expect(result).toEqual("Bob: Can you please call me?");
  });

  it("yells at Bob", function () {
    var result = serveMessage('Bob','call me', yell);
    expect(result).toEqual("Bob: CALL ME!");
  });
});
