// TODO: Include packages needed for this application
const fs = require('fs');

// appendFile() takes in 3 arguments: path, data, and callback function
fs.appendFile('index.html',  (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')
);

// TODO: Create an array of questions for user input
const questions = ['What is your first name?', 'What is your last name?', 'What is your GitHub username?', 'What is your LinkedIn?'];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making Index.HTML");
        fs.writeFileSync("index.html", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}



// Function call to initialize app
init();

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is Your First Name? ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});