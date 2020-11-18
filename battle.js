class Battle {
  constructor(player, opponent, pokemon1, pokemon2) {
    this.player = player;
    this.pokemon1 = player.storage[pokemon1];
    this.opponent = opponent;
    this.pokemon2 = opponent.storage[pokemon2];

    this.turn = 1;
    this.winner = false;
  }

  fight() {
    // players turn
    if (this.turn % 2 !== 0) {
      console.log(`${this.player.name}'s turn, Fight!!`);
      console.log(`${this.pokemon1.name}: ${this.pokemon1.talk()}!!`);

      // pokemon1 strong against pokemon2
      if (this.pokemon1.strength[0] === this.pokemon2.type) {
        this.pokemon2.hitPoints -= this.pokemon1.attackDamage * 1.25;

        console.log(`${this.pokemon1} uses ${this.pokemon1.move}.....`);
        console.log(
          `${this.pokemon2} took ${this.pokemon1.attack * 1.25} damage!\n${
            this.pokemon2.name
          } has ${this.pokemon2.hitPoints} hit points left!`
        );
      }
      // pokemon1 weak against pokemon2
      else if (this.pokemon1.weakness[0] === this.pokemon2.type) {
        this.pokemon2.hitPoints -= this.pokemon1.attackDamage * 0.75;
        console.log(
          `${this.pokemon1} move was not that effective against ${this.pokemon2.name}.....`
        );
        console.log(
          `${this.pokemon2.name} has ${this.pokemon2.hitPoints} hit points left!`
        );
      }
      // even playing ground
      else {
        this.pokemon2.hitPoints -= this.pokemon1.attack;
        console.log(`${this.pokemon1} makes their attack.....`);
        console.log(
          `${this.pokemon2} took ${this.pokemon1.attack} damage!\n${this.pokemon2.name} has ${this.pokemon2.hitPoints} hit points left!`
        );
      }
    }

    if (this.turn % 2 === 0) {
      console.log(`${this.opponent.name}'s turn, Fight!!`);
      console.log(`${this.pokemon2.name}: ${this.pokemon2.talk()}!!`);

      // pokemon2 strong against pokemon1
      if (this.pokemon2.strength[0] === this.pokemon1.type) {
        this.pokemon1.hitPoints -= this.pokemon2.attackDamage * 1.25;

        console.log(`${this.pokemon2} uses ${this.pokemon2.move}.....`);
        console.log(
          `${this.pokemon1} took ${this.pokemon2.attack * 1.25} damage!\n${
            this.pokemon1.name
          } has ${this.pokemon1.hitPoints} hit points left!`
        );
      }
      // pokemon2 weak against pokemon1
      else if (this.pokemon2.weakness[0] === this.pokemon1.type) {
        this.pokemon1.hitPoints -= this.pokemon2.attackDamage * 0.75;
        console.log(
          `${this.pokemon2} move was not that effective against ${this.pokemon1.name}.....`
        );
        console.log(
          `${this.pokemon1.name} has ${this.pokemon1.hitPoints} hit points left!`
        );
      }
      // even playing ground
      else {
        this.pokemon1.hitPoints -= this.pokemon2.attack;
        console.log(`${this.pokemon2} makes their attack.....`);
        console.log(
          `${this.pokemon1} took ${this.pokemon2.attack} damage!\n${this.pokemon1.name} has ${this.pokemon1.hitPoints} hit points left!`
        );
      }
    }
    this.turn++;

    // pokemon 1 out of health
    if (this.pokemon1.hitPoints <= 0) {
      console.log(
        `${this.pokemon1.name} has fainted!\n${this.opponent.name} wins!`
      );
      this.winner = true;
    }
    // pokemon 2 out of health
    if (this.pokemon2.hitPoints <= 0) {
      console.log(
        `${this.pokemon2.name} has fainted!\n${this.player.name} wins!`
      );
      this.winner = true;
    }
  }
}

module.exports = { Battle };
