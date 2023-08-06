// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Can you describe your Project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'How would someone best contribute to your project?',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What command do you use to run your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose one of these licenses',
    choices: [
      'MIT',
      'BSD3.0',
      'APACHE3.0',
      'NONE'
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];







// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {  
      const readMeTemplate = generateMarkdown(data);
        console.log("Making README.md");
        writeToFile("README.md", readMeTemplate);
    })
    .catch((err) => {
        console.log(err);
    })
}


// Function call to initialize app
init();

