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

module.exports = { Pokemon };
