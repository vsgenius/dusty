import tyreType from './index';

test('dry-*', () => {
  expect(tyreType('rain', 'qualification')).toBe('rain');
  expect(tyreType('rain', 'start')).toBe('rain');
  expect(tyreType('rain', 'race')).toBe('rain');
});

test('drizzle-*', () => {
  expect(tyreType('drizzle', 'qualification')).toBe('intermediate');
  expect(tyreType('drizzle', 'start')).toBe('intermediate');
  expect(tyreType('drizzle', 'race')).toBe('intermediate');
});

test('dry-qualification', () => {
  expect(tyreType('dry', 'qualification')).toBe('soft');
});

test('dry-start', () => {
  expect(tyreType('dry', 'start')).toBe('medium');
});

test('dry-race', () => {
  expect(tyreType('dry', 'race')).toBe('hard');
});
