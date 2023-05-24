const inquirer = require('inquirer');

async function promptUserInput() {
  const userInput = {};

  const textResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
  ]);

  userInput.text = textResponse.text;

  const textColorResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
  ]);

  userInput.textColor = textColorResponse.textColor;

  const shapeResponse = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
  ]);

  userInput.shape = shapeResponse.shape;

  const shapeColorResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  userInput.shapeColor = shapeColorResponse.shapeColor;

  return userInput;
}

module.exports = { promptUserInput };
