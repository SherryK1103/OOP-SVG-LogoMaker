// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        name: "text",
        type: "input",
        message: "Enter three characters",
    },

    {
        name: "text color",
        type: "input",
        message: "Insert a color for text",
    },

    {
        name: "Table_of_Contents",
        type: "input",
        message: "List the table of contents for this project",
    },

    {
        name: "installation",
        type: "input",
        message: "How do I install and use this project?",
    },

    {
        name: "usage",
        type: "input",
        message: "Copy and paste the screenshot file path here",
    },

    {
        name: "shapes",
        type: "list",
        message: "Choose a shape for your logo",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
        ]
    },

    {
        name: "contributing",
        type: "input",
        message: "How can others contribute to this project?",
    },
    {
        name: "tests",
        type: "input",
        message: "What command should be run to run a test?",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('writing file');

        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log('answers ---> ',answers);
        writeToFile('README.md', generateReadmeContent(answers));
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    });
}

function getLicenseBadgeURL(license) {
    const licenseBadges = {    
        "Apache License 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
        "GNU GPLv3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
        "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
    };
    
    return licenseBadges[license];
    }


function generateReadmeContent(answers) {
    const licenseBadge = getLicenseBadgeURL(answers.license);

    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${answers.Table_of_Contents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
![License Badge](${licenseBadge})

## Contributing
${answers.contributing}

## Tests
${answers.tests}
`;
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateReadmeContent(answers));
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment.");
            } else {
                console.error("Something else went wrong:", error);
            }
        });
}

// Function call to initialize app
init();