const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    const x1 = 150;
    const y1 = 50;
    const x2 = 250;
    const y2 = 200;
    const x3 = 50;
    const y3 = 200;
    return `<polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
