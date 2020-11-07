var assert = require('chai').assert;
var Player = require('./player');

describe('Player', function() {

  it('should have a name, special requests, and table number', function() {
    var shrimpTacos = new Meal('Shrimp Tacos', ["no cheese"], 14);

    assert.equal(shrimpTacos.name, 'Shrimp Tacos');
    assert.deepEqual(shrimpTacos.specialRequests, ["no cheese"]);
    assert.equal(shrimpTacos.tableNumber, 14);
  });

  it('should be able to have a diff. name, special requests, and table number', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 12);

    assert.equal(appetizer.name, 'Jicama & Cucumber');
    assert.deepEqual(appetizer.specialRequests, []);
    assert.equal(appetizer.tableNumber, 12);
  });

  it('should default to not complete', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);

    assert.equal(appetizer.complete, false);
  });

  it('should be able to be completed', function() {
    var appetizer = new Meal('Jicama & Cucumber', [], 14);
    var completeMeal = appetizer.getMade();

    assert.equal(appetizer.complete, true);
    assert.equal(completeMeal, 'Order up - Jicama & Cucumber');
  });

});
