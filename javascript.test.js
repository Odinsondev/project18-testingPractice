({
  test1,
  capitalize,
  reverse,
  createCalculator,
  caesarCipher,
} = require('./javascript.js'));

//initial test
test('returns true', () => {
  expect(test1()).toBe(true);
});

//capitalize function tests
test('capitalizes first letter', function () {
  expect(capitalize('word')).toBe('Word');
});

test('capitalizes first letter if several words', function () {
  expect(capitalize('random string')).toBe('Random string');
});

//reverse function tests
test('reverses the string', function () {
  expect(reverse('Word')).toBe('droW');
});

test('reverses the string if several words', function () {
  expect(reverse('Random String')).toBe('gnirtS modnaR');
});

//calculator function tests
test('add', function () {
  expect(createCalculator().add(60, 9)).toBe(69);
});

test('subtract', function () {
  expect(createCalculator().subtract(60, 9)).toBe(51);
});

test('multiply', function () {
  expect(createCalculator().multiply(60, 9)).toBe(540);
});

test('divide', function () {
  expect(createCalculator().divide(81, 9)).toBe(9);
});

//caesarCipher function tests
test('uses cipher on test', function () {
  expect(caesarCipher('test', 1)).toBe('uftu');
});

test('tests wrapping from z to a', function () {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('tests case preservation', function () {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('tests punctuation', function () {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
