const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Test de división
test('divides 8 / 4 to equal 2', () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test('divides 8 / 4 to equal 2', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

//Test multiplicar.
test('multiply 4 * 3 to equal 12', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test('multiply 2 * 5 to equal 10', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

//Caso extra
test('divides 10 / 0 to equal 0', () => {
  expect(calculator.divide(10, 0)).toBe("Indefinido");
});