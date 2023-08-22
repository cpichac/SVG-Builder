class Shape {
    constructor() {
      this.text = '';
      this.textColor = '';
      this.shapeColor = '';
    }
  
    render() {
      // Implement SVG rendering logic here
      return `<svg>...</svg>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement circle SVG rendering logic here
      return `<svg><circle cx="..." cy="..." r="..." fill="${this.shapeColor}" /></svg>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement triangle SVG rendering logic here
      return `<svg><polygon points="..." fill="${this.shapeColor}" /></svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement square SVG rendering logic here
      return `<svg><rect x="..." y="..." width="..." height="..." fill="${this.shapeColor}" /></svg>`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  