#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt({
    name: "sentence",
    message: "Enter your message to count words: ",
    type: "input"
});
let wordseparation = userInput.sentence.trim().split(" ");
console.log(wordseparation);
let wordCount = wordseparation.length;
console.log(wordCount);
