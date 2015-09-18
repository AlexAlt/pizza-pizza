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

  this.customerInfo = [];

}

Order.prototype.addPizzas = function(pizza) {
  this.pizzas.push(pizza);
}



// Order.prototype.total = function(){
//   var total = 0;
//   this.pizzas.forEach(function(pizza){
//     total = total + pizza.cost;
//   })
//   return total;
// }