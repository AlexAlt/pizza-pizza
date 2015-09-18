describe('Pizza', function(){
  it('creates a new pizza with the given specifications', function() {
    var testPizza =  new Pizza(1, "Large");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pieSize).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
  });

  it('creates a new pizza with the given specifications', function() {
    var testPizza =  new Pizza(1, "Large", ["Ronis"]);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pieSize).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Ronis"]);
  });


  it('adds toppings to the pizza', function(){
    var testPizza =  new Pizza(1, "Large", ["Ronis"]);
    testPizza.addToppings("Cheese");
    expect(testPizza.toppings).to.eql(["Ronis", "Cheese"]);
  });

  it('calculates cost of pizza', function(){
    var testPizza =  new Pizza(1, "Large", ["Cheese"]);
    expect(testPizza.cost()).to.equal(15);
  });

  it('calculates cost of pizza', function(){
    var testPizza =  new Pizza(2, "Large", ["Cheese"]);
    expect(testPizza.cost()).to.equal(30);
  });
});