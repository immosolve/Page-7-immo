const generateOutput = require("./pag7");

const testCases = [
  { current: 5, total: 10, expected: "1 .. 4 [5] 6 .. 10" }
]


test("generates the correct output ", () => {
  
  testCases.forEach(({current, total, expected}) => {
    expect(generateOutput(current, total)).toEqual(expected);
  })
 
});
