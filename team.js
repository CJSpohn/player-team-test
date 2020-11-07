
class Order {
  constructor(order) {
    this.name = order.name;
    this.meals = order.meals
    this.completeMeals = [];
  }

  cookMeal(meal) {
    if (this.name.includes(meal.tableNumber.toString())) {
      meal.complete = true;
      this.completeMeals.push(meal)
    }
  }

  listSpecialRequests() {
    var holderArray = []
    for (var i = 0; i < this.meals.length; i++) {
      for (var j = 0; j < this.meals[i].specialRequests.length; j++) {
        holderArray.push(this.meals[i].specialRequests[j]);
      }
    }
    return holderArray
  }

}

module.exports = Order;
