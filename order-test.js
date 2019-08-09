var assert = require('chai').assert;
var Order = require('./order');
var Meal = require('./meal');

describe('Order', function() {

  it.skip('should have name and associated meals', function() {
    var meal1 = new Meal('Shrimp Tacos', ['no cheese'], 14);
    var meal2 = new Meal('Jicama & Cucumber', [], 14);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 14);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 14', meals: meals });

    assert.equal(order.name, 'Table 14');
    assert.equal(order.meals, meals);
  });

  it.skip('should be able to have a different name and associated meals', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.equal(order.name, 'Table 3');
    assert.equal(order.meals, meals);
  });

  it.skip('should have no complete meals by default', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ["cilantro", "onion"], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.deepEqual(order.completeMeals, []);
  });

  it.skip('should be able to cook meals', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    order.cookMeal(meal1);
    assert.deepEqual(order.completeMeals.length, 1);
    assert.deepEqual(order.completeMeals[0].name, 'Pico de Gallo Quesadillas');
    assert.equal(meal1.complete, true);

    order.cookMeal(meal2);
    assert.deepEqual(order.completeMeals.length, 2);
    assert.deepEqual(order.completeMeals[1].name, 'Sombra Shroom Griddled Tacos');
  });

  it.skip('should only cook meals for the correct table', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 5);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    order.cookMeal(meal3);
    assert.deepEqual(order.completeMeals.length, 0);
  });
   
  it.skip('should be able to list all special requests', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.equal(order.listSpecialRequests(), ['crema', 'cilantro', 'onion']);
  });

});
