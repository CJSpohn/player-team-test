//Potential answers, just one way to solve them.

class Player {
  constructor(name, number, injuries) {
    this.name = name;
    this.number = number,
    this.injuries = injuries || []
    this.playing = false;
  }

  putMeInCoach() {
    if (this.injuries.length === 0) {
      this.playing = true;
      return `I'm ready for action!`
    } else {
      return `I can't go in, I'm all borked up.`
    }
  }

  visitDoctor() {
    this.injuries.pop();
  }

}

module.exports = Player;
