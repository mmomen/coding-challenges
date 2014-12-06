var punch = function () {
  console.log('POWA!');
};

var kick = function () {
  console.log('KIA!');
};

var doubleUp = function(arg){
  arg();
  arg();
};

describe('doubleUp', function(){
  it('calls its argument twice', function(){
    spyOn(console, 'log');

    doubleUp(punch);
    doubleUp(kick);

    expect(console.log.calls.count()).toEqual(4);
  });
});