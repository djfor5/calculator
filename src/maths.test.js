import { operate } from "./maths.js";

/* eslint-disable no-undef */

test("1 + 2 = 3", () => {
  expect(operate(1, "add", 2)).toBe(3);
});

test("1 - 2 = -1", () => {
  expect(operate(1, "subtract", 2)).toBe(-1);
});

test("-5 * -3 = 15", () => {
  expect(operate(-5, "multiply", -3)).toBe(15);
});

test("6 / -2 = -3", () => {
  expect(operate(6, "divide", -2)).toBe(-3);
});

/* eslint-enable no-undef */
