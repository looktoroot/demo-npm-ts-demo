import { minus } from './minus';

test('minus test', () => {
  const result = minus(5, 3);
  expect(result).toBe(2);
});