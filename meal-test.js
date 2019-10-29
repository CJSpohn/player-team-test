var assert = require('chai').assert;
var Meal = require('./meal');

describe('Meal', function() {

  it.skip('should have a name, special requests, and table number', function() {
    var shrimpTacos = new Meal('Shrimp Tacos', ["no cheese"], 14);
    
    assert.equal(shrimpTacos.name, 'Shrimp Tacos');
    assert.deepEqual(shrimpTacos.specialRequests, ["no cheese"]);
    assert.equal(shrimpTacos.tableNumber, 14);
  });

  it.skip('should be able to have a diff. name, special requests, and table number', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 12);
    
    assert.equal(appetizer.name, 'Jicama & Cucumber');
    assert.deepEqual(appetizer.specialRequests, []);
    assert.equal(appetizer.tableNumber, 12);
  });

  it.skip('should default to not complete', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    
    assert.equal(appetizer.complete, false);
  });

  it.skip('should be able to be completed', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    var completeMeal = appetizer.getMade();

    assert.equal(appetizer.complete, true);
    assert.equal(completeMeal, 'Order up - Jicama & Cucumber');
  });

});
