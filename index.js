const { promptUserInput } = require('./lib/userInput');
const { generateSVG } = require('./lib/svgGenerator');
const { saveSVGToFile } = require('./lib/fileWriter');

async function runApplication() {
  try {
    const userInput = await promptUserInput();
    const svgString = generateSVG(userInput);
    saveSVGToFile(svgString, 'logo.svg');
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

runApplication();
