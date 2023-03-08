const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  if (current === current) {
    output += `1 .. ${current -1 } [${current}] ${current + 1} .. ${total}`;
  }
  return output;
}
module.exports = generateOutput;
