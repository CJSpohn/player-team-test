//Potential answers, just one way to solve them.

class Team {
  constructor(obj) {
    this.name = obj.name;
    this.players = obj.players
    this.injuries = 0;
    this.starters = []
  }

  generateRoster() {
    var array = [];
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].injuries.length === 0) {
        array.push(this.players[i])
      }
    }
    return array
  }

  consultDoctor() {
    var total = 0;
    for (var i = 0; i < this.players.length; i++) {
      total += this.players[i].injuries.length
    }
    this.injuries = total
    return `Your team has ${this.injuries} injuries`
  }

  fieldTeam() {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].injuries.length === 0) {
        this.starters.push(this.players[i])
      } else {
        return `Damnit ${this.players[i].name} go see the doctor for your ${this.players[i].injuries[0]}!`
      }
    }
  }

}
