//import the inquirer module wich is the command line interface for Node.js
import inquirer from "inquirer"

//Decleare a costant "answer" and assign it to the result of inquirer.promopt() 

const answers: {
    Sentence: string
} = await inquirer.prompt([{
    name:"Sentence",
    type:"input",
    message:"Enter your sentence to count the word:"
}])
const words = answers.Sentence.trim().split(" ")
console.log(words)

//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
