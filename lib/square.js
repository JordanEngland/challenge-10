const Shape = require('./shape');

class Square extends Shape {
  render() {
    const x = 50;
    const y = 50;
    const size = 200; 
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
