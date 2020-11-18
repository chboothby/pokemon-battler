const { Pokemon } = require("../pokemon");

describe("Pokemon contructor", () => {
  describe("PROPS", () => {
    it("Should have name property", () => {
      const bulbasaur = new Pokemon("Bulbasaur");
      expect(bulbasaur).toHaveProperty("name");
      expect(bulbasaur.name).toBe("Bulbasaur");
    });
    it("Should have hit points (health) property that is passed as an argument", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3);
      expect(bulbasaur).toHaveProperty("hitPoints");
      expect(bulbasaur.hitPoints).toBe(3);
    });
    it("Should have attack damage property that is passed as an argument", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3, 3);
      expect(bulbasaur).toHaveProperty("attackDamage");
      expect(bulbasaur.attackDamage).toBe(3);
    });
    it("Should have a sound property that stores the noise a pokemon makes as a string", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3, 3, "baaaaah");
      expect(bulbasaur).toHaveProperty("sound");
      expect(typeof bulbasaur.sound).toBe("string");
      expect(bulbasaur.sound).toBe("baaaaah");
    });

    it("Should have a move property that stores the move a pokemon can make", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3, 3, "baaaaah", "overgrow");
      expect(bulbasaur).toHaveProperty("move");
      expect(typeof bulbasaur.move).toBe("string");
      expect(bulbasaur.move).toBe("overgrow");
    });
  });
  describe("METHODS", () => {
    it("Pokemon has talk method", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3, 3, "baaaaah", "overgrow");
      expect("talk" in bulbasaur).toBe(true);
      expect(bulbasaur.talk()).toBe("baaaaah");
    });
    it("Pokemon has useYourMoves method", () => {
      const bulbasaur = new Pokemon("Bulbasaur", 3, 3, "baaaaah", "overgrow");
      expect("useYourMoves" in bulbasaur).toBe(true);
      expect(bulbasaur.useYourMoves()).toBe("overgrow");
    });
    it("Pokemon has a setStrengthsAndWeaknessesMethod", () => {
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        3,
        3,
        "baaaaah",
        "overgrow",
        "grass"
      );
      bulbasaur.setStrengthAndWeakness();
      expect(bulbasaur.strength[0]).toBe("water");
      expect(bulbasaur.weakness[0]).toBe("fire");
    });
  });
});
