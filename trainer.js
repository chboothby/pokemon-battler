class Trainer {
  constructor(name) {
    this.name = name;
    this.storage = {};
    this.maxSize = 3;
  }

  catch(pokemon) {
    if (Object.keys(this.storage).length < this.maxSize) {
      this.storage[pokemon.name] = pokemon;
    } else return `Storage full, ${pokemon.name} has been set free`;
  }
}
module.exports = { Trainer };
