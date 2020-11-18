const { Trainer } = require("../trainer");
const { Pokemon } = require("../pokemon");

describe("Trainer constructor", () => {
  it("Should return an object", () => {
    const trainer1 = new Trainer();
    expect(typeof trainer1).toBe("object");
  });
  describe("PROPS", () => {
    it("Has name property", () => {
      const trainer1 = new Trainer("Red");
      expect(trainer1).toHaveProperty("name");
      expect(trainer1.name).toBe("Red");
    });
    it("Has a storage property set to an empty object", () => {
      const trainer1 = new Trainer("Red");
      expect(trainer1).toHaveProperty("storage");
      expect(typeof trainer1.storage).toBe("object");
    });
    it("Has a maxSize property set to 3", () => {
      const trainer1 = new Trainer("Red");
      expect(trainer1).toHaveProperty("maxSize");
      expect(trainer1.maxSize).toBe(3);
    });
  });
  describe("METHODS", () => {
    it("Has a catch method", () => {
      const trainer1 = new Trainer("Red");
      expect("catch" in trainer1).toBe(true);
    });

    it("Catch method adds a pokemon to its storage", () => {
      const trainer1 = new Trainer("Red");
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        3,
        3,
        "baaaah",
        "overgrow",
        "grass"
      );
      trainer1.catch(bulbasaur);
      expect(trainer1.storage).toEqual({ Bulbasaur: bulbasaur });
    });
    it("Pokemon trainers can not catch more pokemon than their max storage size", () => {
      const trainer1 = new Trainer("Red");
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        3,
        3,
        "baaaah",
        "overgrow",
        "grass"
      );
      const squirtle = new Pokemon(
        "squirtle",
        4,
        4,
        "squeeee",
        "squirt",
        "water"
      );
      const rattata = new Pokemon("Rattata", 6, 4, "chomp", "run away");
      const jigglypuff = new Pokemon(
        "Jigglypuff",
        5,
        3,
        "singgg",
        "cute charm"
      );
      trainer1.catch(bulbasaur);
      trainer1.catch(squirtle);
      trainer1.catch(rattata);
      expect(Object.keys(trainer1.storage).length).toBe(3);
      const exceedLimit = trainer1.catch(jigglypuff);
      expect(exceedLimit).toBe("Storage full, Jigglypuff has been set free");
      expect(Object.keys(trainer1.storage).length).toBe(3);
    });
  });
});
