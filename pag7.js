const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  if (current === 1) {
    output += `1`;
  }
  if (current > 2) {
  output += `1 .. ${current -1} `
  }
  output += `[${current}]`
  if (current < total){
    output += ` ${current + 1} .. ${total}`
  }
  return output
}
module.exports = generateOutput;
