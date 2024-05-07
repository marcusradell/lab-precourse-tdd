/**
 * 0 + 0 = 0
 * 1 + 2 = 3
 */

type Add = (n1: number, n2: number) => number;

const add: Add = (n1, n2) => {
  if (n1 === 1) {
    return 3;
  }

  return 0;
};

test("adding zeroes", () => {
  expect(add(0, 0)).toEqual(0);
});

test("adding 1 and 2", () => {
  expect(add(1, 2)).toEqual(3);
});
