const generateOutput = require("./pag7");

const testCases = [
  { current: 4, total: 10, expected: "1 2 3 [4] 5 .. 10" }
]


test("generates the correct output ", () => {
  
  testCases.forEach(({current, total, expected}) => {
    expect(generateOutput(current, total)).toEqual(expected);
  })
 
});
