// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'Input project name:',
        name: 'projectName'
      },
      {
        type: 'input',
        message: 'Input Github username',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Input email address:',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Enter project description:',
        name: 'description'
      },
      {
        type: 'input',
        message: 'Input Installation guide:',
        name: 'install'
      },
      {
        type: 'input',
        message: 'Enter usage instructions:',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'Enter Contributors, if any, and credit to any third party assets used:',
        name: 'contributors'
      },
      {
        type: 'list',
        message: 'Select Included License:',
        choices: [

            "Apache",
            "GNU",
            "MIT",
            "BSD_2",
            "BSD_3"

        ],
        name: 'license'
      },
      {
        type: 'input',
        message: 'Enter contributing guidelines:',
        name: 'contribute'
      },
      {
        type: 'input',
        message: 'Enter link to deployed application:',
        name: 'link'
      },

];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(writeToFile)


}

// Function call to initialize app
init();
