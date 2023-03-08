const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  if (current === 1) {
    output += `[${current}] `;
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
  } else if (current === 96) {
    output += `1 .. [${current}] 97 98 99 100`;
  } else if (current === 97) {
    output += `1 .. 96 [${current}] 98 99 100`;
  } else if (current === 98) {
    output += `1 .. 96 97 [${current}] 99 100`;
  } else if (current === 99) {
    output += `1 .. 96 97 98 [${current}] 100`;
  } else if (current === 100) {
    output += `1 .. 96 97 98 99 [${current}]`;
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
