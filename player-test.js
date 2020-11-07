var assert = require('chai').assert;
var Player = require('./player');

describe('Player', function() {

  it('should have a name, jersey number, and injuries', function() {
    var player = new Player('Jeff', 27, ['bruised rib']);

    assert.equal(player.name, 'Jeff');
    assert.equal(player.number, 27);
    assert.deepEqual(shrimpTacos.injuries ['bruised rib']);
  });

  it.skip('should be able to have a diff. name, jersey number, and injuries', function() {
    var player = new Player('Mary', 22, ['sprained ankle']);

    assert.equal(player.name, 'Mary');
    assert.equal(player.number, 22);
    assert.deepEqual(player.injuries, ['sprained ankle']);
  });

  it.skip('should default to not playing', function() {
    var player = new Player('Mark', 44, []);

    assert.equal(player.playing, false);
  });

  it.skip('should be able to be playing', function() {
    var player = new Player('Mark', 44, []);
    var playingPlayer = player.putMeInCoach();

    assert.equal(player.playing, true);
    assert.equal(playingPlayer, `I'm ready for action!`);
  });

  it.skip('should not be able to be playing if it has an injury', function() {
    var player = new Player('Randall', 23, ['stubbed toe']);
    var playingPlayer = player.putMeInCoach();

    assert.equal(player.playing, false);
    assert.equal(playingPlayer, `I can't go in, I'm all borked up.`)
  })

});
