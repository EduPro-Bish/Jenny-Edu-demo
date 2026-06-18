const { add, greet } = require('./index');

test('adds two numbers correctly', () => {
  expect(add(6, 3)).toBe(9);
});

test('greets with the correct name', () => {
  expect(greet('Jenkins')).toBe('Hello, Jenkins!');
});