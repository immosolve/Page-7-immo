const generateOutput = require("./pag7");

const testCases = [
  { current: 100, total: 100, expected: "1 .. 96 97 98 99 [100]" },
  { current: 1, total: 100, expected: "[1] 2 3 4 5 .. 100" },
  { current: 5, total: 100, expected: "1 .. 4 [5] 6 .. 100" },
];

test("generates the correct output ", () => {
  testCases.forEach(({ current, total, expected }) => {
    expect(generateOutput(current, total)).toEqual(expected);
  });
});
