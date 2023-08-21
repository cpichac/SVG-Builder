const { Circle, Triangle, Square } = require('Shape');

test('Circle render method', () => {
  const circle = new Circle();
  circle.shapeColor = '#FF0000'; // Example shape color

  const svgContent = circle.render();

  // Add assertions to test the generated SVG content
  expect(svgContent).toContain('<circle');
  expect(svgContent).toContain('fill="#FF0000"');
});

// Similar tests for Triangle and Square classes
