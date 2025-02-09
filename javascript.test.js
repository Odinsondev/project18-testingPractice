({ test1, capitalize, reverse } = require('./javascript.js'));

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
