const inquirer = require("inquirer");
const { Battle } = require("./battle");
const { Trainer } = require("./trainer");
const { Pokemon, pokeDeck } = require("./battle");

console.log(`Hi there! Are you ready to play some Pokemon?!`);

const questions = [{ type: "input", name: "pressEnter" }];
