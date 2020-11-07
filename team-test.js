var assert = require('chai').assert;
var Team = require('./team');
var Player = require('./player');

describe('Team', function() {

  it.skip('should have name and associated players', function() {
    var player1 = new Player('Becky', 14);
    var player2 = new Player('Marcus', 28, ['shin splints']);
    var player3 = new Player('Kelly', 44, ['torn ACL']);
    var player4 = new Player('Robert', 22,)
    var players = [player1, player2, player3, player4];
    var team = new Team({ name: 'Cage Rats', players: players });

    assert.equal(team.name, 'Cage Rats');
    assert.equal(team.players, players);
  });

  it.skip('should be able to generate an active players roster', function() {
    var player1 = new Player('Becky', 14);
    var player2 = new Player('Marcus', 28, ['shin splints']);
    var player3 = new Player('Kelly', 44, ['torn ACL']);
    var player4 = new Player('Robert', 22,)
    var players = [player1, player2, player3, player4];
    var team = new Team({ name: 'Cage Rats', players: players });

    var roster = team.generateRoster();

    assert.deepEqual(roster, [player1, player4]);
  });

  it.skip('should be able to consult a doctor and update how many injuries there are', function() {
    var player1 = new Player('Becky', 14);
    var player2 = new Player('Marcus', 28, ['shin splints', 'bruised rib']);
    var player3 = new Player('Kelly', 44, ['torn ACL']);
    var player4 = new Player('Robert', 22,)
    var players = [player1, player2, player3, player4];
    var team = new Team({ name: 'Cage Rats', players: players });

    assert.equal(team.injuries, 0)

    var doctorCheck = team.consultDoctor();

    assert.equal(team.injuries, 3)
    assert.deepEqual(doctorCheck, `Your team has 3 injuries`);
  });

  it.skip('should be able to field a team of healthy players', function() {
    var player1 = new Player('Randall', 14);
    var player2 = new Player('Jennifer', 28);
    var player3 = new Player('Amy', 44);
    var player4 = new Player('Joe', 22)
    var players = [player1, player2, player3, player4];
    var team = new Team({ name: 'Cage Rats', players: players });

    var starters = team.fieldTeam();

    assert.deepEqual(team.starters, players)
  });

  it.skip('should have the coach stop fielding his team and get angry if a player cannot go in due to injury', function() {
    var player1 = new Player('Randall', 14);
    var player2 = new Player('Jennifer', 28);
    var player3 = new Player('Amy', 44, ['broken wrist']);
    var player4 = new Player('Joe', 22)
    var players = [player1, player2, player3, player4];
    var team = new Team({ name: 'Cage Rats', players: players });

    var starters = team.fieldTeam()
    assert.deepEqual(team.starters, [player1, player2])
    assert.equal(starters, `Damnit Amy go see the doctor for your broken wrist!`);
  });

});
