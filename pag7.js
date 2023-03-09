const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  for (let i = 1; i <= 7; i++) {
    if (i < current) {
      output += `${i} `;
    }
    if (i === current) {
      output += `[${current}]`;
    }
    if (i > current) {
      output += ` ${i}`;
    }
  }

  // if (current > 2) {
  //   output += `1 .. ${current - 1} `;
  // }
  // output += `[${current}]`;
  // if (current < total) {
  //   output += ` ${current + 1} .. ${total}`;
  // }
  return output;
}

module.exports = generateOutput;
