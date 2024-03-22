
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guessed the number between 1-10: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guseed right number");
} else {
    console.log("you gussed wrong number");
}