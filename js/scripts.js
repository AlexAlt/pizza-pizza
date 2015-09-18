function Pizza(quantity, pieSize, toppings){
  this.quantity = quantity;
  this.pieSize = pieSize;

  if(toppings) {
    this.toppings = [].concat(toppings);
  } else {
    this.toppings = [];
  }

}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.cost = function(){
  var cost = 10;

  if (this.pieSize === "Large") {
    cost += 5;
  }

  if (this.pieSize === "Medium") {
    cost += 3;
  }


  this.toppings.forEach(function(topping){
    if (topping !== "Cheese") {
      cost += 2;  
    }
  });

  return cost * this.quantity;
}

function Order(pizzas){
  if(pizzas) {
    this.pizzas = [].concat(pizzas);
  } else {
    this.pizzas = [];
  }

  this.customerInfo = null;

}

Order.prototype.addPizzas = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.addCustomer = function(customer) {
  this.customerInfo = customer;
}

Order.prototype.total = function(){
  var total = 0;
  this.pizzas.forEach(function(pizza){
    total = total + pizza.cost();
  })
  return total;
}


$(document).ready(function(){
  $("#add-pizza").click(function(){
    $("#new-pizzas").append(
                  '<div class="new-pizza">' +
                    '<div class="form-group">' +
                      '<p>Select Size</p>' +
                      '<input type="radio" name="size" value="small"> Small ' +
                      '<input type="radio" name="size" value="medium"> Medium ' +
                      '<input type="radio" name="size" value="large"> Large ' +
                    '</div>' +

                    '<div class="form-group">' +
                      '<p>Toppings</p>' +
                      '<input type="checkbox" name="toppings" value="Cheese"> Cheese ' +
                      '<input type="checkbox" name="toppings" value="Spinach"> Spinach ' +
                      '<input type="checkbox" name="toppings" value="Peppers"> Peppers ' +
                      '<input type="checkbox" name="toppings" value="Mushrooms"> Mushrooms '  +
                      '<input type="checkbox" name="toppings" value="Roasted Garlic"> Roasted Garlic ' +
                      '<input type="checkbox" name="toppings" value="Tomatoes"> Tomatoes ' +
                    '</div>' +

                    '<div class="form-group">' +
                      '<p>Quantity</p>' +
                      '<input type="text" id="quantity">'+
                    '</div>' +
                  '</div>');
  });


  $("form#pizza-order").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedQuantity = parseInt($("input#quantity").val());

    var newPizza = new Pizza(inputtedQuantity, inputtedSize);

    $.each($("input[name=toppings]:checked"), function(){
         newPizza.addToppings($(this).val());
    });

  });
});



