// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        name: "text",
        type: "input",
        message: "Enter three characters",
    },

    {
        name: "text_color",
        type: "input",
        message: "Insert a color for text",
    },

    {
        name: "shapes",
        type: "list",
        message: "Choose a shape for your logo",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    },

    {
        name: "shapes_color",
        type: "input",
        message: "Enter a shape color",
    },
];

function generateSVG(answers) {
    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

      // Handle the chosen shape
  if (answers.shapes === 'Circle') {
    svg += `<circle cx="150" cy="100" r="80" fill="${answers.shapes_color}" />`;
  } else if (answers.shapes === 'Square') {
    svg += `<rect x="50" y="50" width="200" height="200" fill="${answers.shapes_color}" />`;
  } else if (answers.shapes === 'Triangle') {
    svg += `<path d="M150 20 L250 180 L50 180 Z" fill="${answers.shapes_color}" />`;
  }

  // Add the text
  svg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.text}</text>`;

  svg += `</svg>`;
  return svg;
}


async function generateLogo () {
    const answers = await inquirer.prompt(questions);
    console.log(answers);

    const svg = generateSVG(answers);

    // Write the SVG string to a file named 'logo.svg'
    fs.writeFile('logo.svg', svg, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Logo SVG file created successfully!');
        }
    });
}

generateLogo();