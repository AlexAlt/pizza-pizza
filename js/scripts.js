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