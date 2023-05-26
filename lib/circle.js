const Shape = require('./shape');

class Circle extends Shape {
  render() {
    const cx = 150; 
    const cy = 100;
    const radius = 100;

    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

module.exports = Circle;
