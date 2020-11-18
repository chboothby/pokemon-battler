const inquirer = require("inquirer");
const { Battle } = require("./battle");
const { Trainer } = require("./trainer");
const {
  Pokemon,
  rattata,
  jigglypuff,
  squirtle,
  bulbasaur,
} = require("./pokemon");

console.log(`Are you ready to play some Pokemon?!`);

const terminalImage = require("terminal-image");

(async () => {
  console.log(await terminalImage.file("img/pokeball.png", { width: 40 }));
})();

const questions = [
  { type: "input", name: "hitEnter", message: "Hit enter to start" },
  { type: "input", name: "name", message: "Hi there! What is your name?" },
  {
    type: "list",
    name: "pokemon",
    message: "Time to catch some pokemon!",
    choices: ["Bulbasaur", "Squirtle", "Rattata", "Jigglypuff"],
  },
  {
    type: "list",
    name: "opponent",
    message: "Choose your opponent",
    choices: ["Giovanni"],
  },
];

const nextQuestions = [
  {
    type: "list",
    name: "turn",
    message: "What is your next move?",
    choices: ["Fight", "Run"],
  },
];

const takeTurn = () => {
  inquirer.prompt(nextQuestions).then((answers) => {
    if (answers.turn === "Fight") {
      if (thisBattle.winner === false) {
        thisBattle.fight();
        if (thisBattle.winner === false) {
          thisBattle.fight();
          if (thisBattle.winner === false) {
            takeTurn();
          }
        }
      }
    } else if (answers.turn === "Run") {
      console.log("Too bad, come back when you are ready!");
    }
  });
};

inquirer.prompt(questions).then((answers) => {
  const player = new Trainer(answers.name);
  const opponent = new Trainer(answers.opponent);

  if (answers.pokemon === "Bulbasaur") {
    player.catch(bulbasaur);
    opponent.catch(squirtle);
  }
  if (answers.pokemon === "Jigglypuff") {
    player.catch(jigglypuff);
    opponent.catch(rattata);
  }
  if (answers.pokemon === "Squirtle") {
    player.catch(squirtle);
    opponent.catch(bulbasaur);
  }
  if (answers.pokemon === "Rattata") {
    player.catch(rattata);
    opponent.catch(jigglypuff);
  }

  thisBattle = new Battle(
    player,
    opponent,
    Object.values(player.storage)[0],
    Object.values(opponent.storage)[0]
  );

  console.log(`Let the battle commence!`);
  takeTurn();
});
