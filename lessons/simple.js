const { sum, subtract } = require("../math");

// test library

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`toBe Error: ${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`toEqual Error: ${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual < expected) {
        throw new Error(
          `toBeGreaterThan Error: ${actual} is less than than ${expected}`
        );
      }
    },
    toBeLessThan(expected) {
      if (actual > expected) {
        throw new Error(
          `toBeLessThan Error: ${actual} is greater than ${expected}`
        );
      }
    },
  };
};

// test runner
const test = (title, callback) => {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✗ ${title}`);
    console.error(error);
  }
};

// TESTS
test("sum adds numbers", () => {
  const result = sum(4, 5);
  const expected = 10;
  expect(result).toBe(expected);
  expect(result).toEqual(expected);
  expect(result).toBeGreaterThan(expected);
  expect(result).toBeLessThan(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBeGreaterThan(expected);
  expect(result).toBeLessThan(expected);
  expect(result).toBeGreaterThan(expected);
  expect(result).toBeLessThan(expected);
});
