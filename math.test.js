const math = require('./math');

test('math.add should add two numbers', () => {
  const result = math.add(1, 2);
  expect(result).toBe(3);
});

test('math.subtract should subtract two numbers', () => {
  const result = math.subtract(1, 2);
  expect(result).toBe(-1);
});