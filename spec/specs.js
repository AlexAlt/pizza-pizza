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


describe('Order', function(){
  it('creates an order with the given specifications', function(){
    var testPizza =  new Pizza(1, "Large", ["Cheese"]);
    var testOrder = new Order(testPizza);
    expect(testOrder.pizzas).to.eql([testPizza]);
  });

   it('adds pizzas to the order', function(){
    var testPizza =  new Pizza(1, "Large", ["Cheese"]);
    var testPizza2 =  new Pizza(1, "Medium", ["Cheese"]);
    var testOrder = new Order(testPizza);
    testOrder.addPizzas(testPizza2);
    expect(testOrder.pizzas).to.eql([testPizza, testPizza2]);
  });

  it('calculates total cost of the order', function(){
    var testPizza =  new Pizza(1, "Large", ["Cheese"]);
    var testPizza2 =  new Pizza(1, "Medium", ["Cheese"]);
    var testOrder = new Order(testPizza);
    testOrder.addPizzas(testPizza2);
    expect(testOrder.total()).to.equal(28);
  });

  it('adds customer info to the order', function(){
    var testCustomer =  new Customer("Pizza Man", "123 Pizza Lane", "555.5555");
    var testOrder = new Order();
    testOrder.addCustomer(testCustomer);
    expect(testOrder.customerInfo).to.eql([testCustomer]);
  });

});

describe('Customer', function(){
  it('creates customer with the given specifications', function(){
    var testCustomer =  new Customer("Pizza Man", "123 Pizza Lane", "555.5555");
    expect(testCustomer.name).to.equal("Pizza Man");
    expect(testCustomer.address).to.equal("123 Pizza Lane");
    expect(testCustomer.phoneNumber).to.equal("555.5555");
  });
});




