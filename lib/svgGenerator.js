const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

function generateSVG(userInput) {
  let shape;

  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape selected.');
  }

  shape.setColor(userInput.shapeColor);

  const svgWidth = 300;
  const svgHeight = 200;
  const textX = svgWidth / 2;
  const textY = svgHeight / 2;

  return `
  <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}">
  <style>
    svg { width: ${svgWidth}px; height: ${svgHeight}px; }
  </style>
  ${shape.render()}
  <text x="${textX}" y="${textY}" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
</svg>
  `;
}

module.exports = { generateSVG };
