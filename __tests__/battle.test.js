const { Battle } = require("../battle");
const { Trainer } = require("../trainer");
const { Pokemon } = require("../pokemon");

beforeEach(() => {
  ash = new Trainer("Ash");
  elaine = new Trainer("Elaine");
  bulbasaur = new Pokemon("Bulbasaur", 10, 3, "baaaah", "overgrow", "grass");
  bulbasaur.setStrengthAndWeakness();
  squirtle = new Pokemon("Squirtle", 10, 4, "squeeee", "squirt", "water");
  squirtle.setStrengthAndWeakness();

  rattata = new Pokemon("Rattata", 10, 4, "chomp", "run away");
  rattata.setStrengthAndWeakness();

  jigglypuff = new Pokemon("Jigglypuff", 10, 3, "singgg", "cute charm");
  jigglypuff.setStrengthAndWeakness();

  ash.catch(bulbasaur);
  elaine.catch(rattata);
  ash.catch(jigglypuff);
  elaine.catch(squirtle);
  newBattle = new Battle(
    ash,
    elaine,
    Object.values(ash.storage)[0],
    Object.values(elaine.storage)[0]
  );
});

describe("Battle constructor", () => {
  describe("PROPS", () => {
    it("Returns an object", () => {
      expect(typeof newBattle).toBe("object");
    });
    it("Has expected properties", () => {
      expect(Object.keys(newBattle).length).toBe(6);
    });
  });
  describe("METHODS", () => {
    it("", () => {
      newBattle.fight();
      expect(elaine.storage["Rattata"].hitPoints).toBe(7);
      newBattle.fight();
      expect(ash.storage["Bulbasaur"].hitPoints).toBe(6);
      newBattle.fight();
      expect(elaine.storage["Rattata"].hitPoints).toBe(4);
      newBattle.fight();
      expect(ash.storage["Bulbasaur"].hitPoints).toBe(2);
      newBattle.fight();
      expect(elaine.storage["Rattata"].hitPoints).toBe(1);
      newBattle.fight();
    });
  });
});
