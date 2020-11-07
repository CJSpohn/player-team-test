var assert = require('chai').assert;
var Team = require('./team');
var Player = require('./player');

describe('Team', function() {

  it('should have name and associated players', function() {
    var player1 = new Player('Becky', 14);
    var player2 = new Player('Marcus', 28, ['shin splints']);
    var player3 = new Player('Kelly', 44, ['torn ACL']);
    var players = [player1, player2, player3];
    var order = new Team({ name: 'Table 14', meals: meals });

    assert.equal(order.name, 'Table 14');
    assert.equal(order.meals, meals);
  });

  it('should be able to have a different name and associated meals', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.equal(order.name, 'Table 3');
    assert.equal(order.meals, meals);
  });

  it('should have no complete meals by default', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ["cilantro", "onion"], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.deepEqual(order.completeMeals, []);
  });

  it('should be able to cook meals', function() {
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

  it('should only cook meals for the correct table', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 5);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    order.cookMeal(meal3);
    assert.deepEqual(order.completeMeals.length, 0);
  });

  it('should be able to list all special requests', function() {
    var meal1 = new Meal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = new Meal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = new Meal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = new Order({ name: 'Table 3', meals: meals });

    assert.deepEqual(order.listSpecialRequests(), ['crema', 'cilantro', 'onion']);
  });

});
