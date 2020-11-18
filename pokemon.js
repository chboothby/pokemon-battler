class Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move, type) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
    this.type = type;
    this.strength = [];
    this.weakness = [];
  }

  talk() {
    return this.sound;
  }

  useYourMoves() {
    return this.move;
  }

  setStrengthAndWeakness() {
    switch (this.type) {
      case "fire":
        this.strength.push("grass");
        this.weakness.push("water");
        break;
      case "grass":
        this.strength.push("water");
        this.weakness.push("fire");
        break;
      case "water":
        this.strength.push("fire");
        this.weakness.push("grass");
        break;
    }
  }
}

// create pokemon
const squirtle = new Pokemon(
  "Squirtle",
  287,
  40,
  "squeeeeeee!",
  "water gun",
  "water"
);
const bulbasaur = new Pokemon(
  "Bulbasaur",
  301,
  41,
  "bulbaah!",
  "whippp!",
  "grass"
);
squirtle.setStrengthAndWeakness();
bulbasaur.setStrengthAndWeakness();

const rattata = new Pokemon("Rattata", 190, 39, "chomp", "run away!");
const jigglypuff = new Pokemon("Jigglypuff", 201, 30, "singgg", "cute charm");

module.exports = { Pokemon, rattata, jigglypuff, squirtle, bulbasaur };
