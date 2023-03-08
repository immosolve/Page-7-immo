const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  if (current === 1) {
    output += `[1] `;
    for (let i = 2; i <= 5; i++) {
      output += `${i} `;
    }
    if (total > 5) {
      output += `.. ${total}`;
    }
  } else if (current === 2) {
    output += `1 [2] `;
    for (let i = 3; i <= 5; i++) {
      output += `${i} `;
    }
    if (total > 5) {
      output += `.. ${total}`;
    }
  } else if (current === 3) {
    output += `1 2 [3] `;
    for (let i = 4; i <= 5; i++) {
      output += `${i} `;
    }
    if (total > 5) {
      output += `.. ${total}`;
    }
  } else if (current === 4) {
    output += `1 2 3 [4] `;
    for (let i = 5; i <= 5 && i <= total; i++) {
      output += `${i} `;
    }
    if (total > 5) {
      output += `.. ${total}`;
    }
  } else {
    if (current > 2) {
      output += `1 .. ${current - 1} `;
    }
    output += `[${current}]`;
    if (current < total) {
      output += ` ${current + 1} .. ${total}`;
    }
  }

  return output;
}
module.exports = generateOutput;
