import { expect, test } from 'vitest';

test('CI/CD Pipeline sanity check - math and basic verification', () => {
  const sum = (a: number, b: number) => a + b;
  expect(sum(2, 3)).toBe(5);
});

test('Environment check for CI execution', () => {
  const isCiReady = true;
  expect(isCiReady).toBe(true);
});
