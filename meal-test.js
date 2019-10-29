var assert = require('chai').assert;
var Meal = require('./meal');

describe('Meal', function() {

  it.skip('should have a name, special requests, and table number', function() {
    var shrimpTacos = new Meal('Shrimp Tacos', ["no cheese"], 14);
    
    assert.equal(shrimpTacos.name, 'Shrimp Tacos');
    assert.deepEqual(shrimpTacos.specialRequests, ["no cheese"]);
    assert.equal(shrimpTacos.tableNumber, 14);
  });

  it.skip('should be able to have a name, special requests, and table number', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    
    assert.equal(appetizer.name, 'Jicama & Cucumber');
    assert.deepEqual(appetizer.specialRequests, []);
  });

  it.skip('should default to not complete', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    
    assert.equal(customer44.complete, false);
  });

  it.skip('should have a table number', function() {
    var shrimpTacos = new Meal('Shrimp Tacos', ["no cheese"], 14);
    
    assert.equal(shrimpTacos.tableNumber, 14);
  });

  it.skip('should have be able to have a different table number', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    
    assert.equal(appetizer.tableNumber, 14);
  });

  it.skip('should be able to pay for a rental car', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    var completeMeal = appetizer.getMade();

    assert.equal(appetizer.complete, true);
    assert.equal(completeMeal, 'Order up - Jicama & Cucumber');
  });

});
