describe('Pizza', function(){
  it('creates a new pizza with the given specifications', function() {
    var testPizza =  new Pizza(1, "Large");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pieSize).to.equal("Large");
  });
});