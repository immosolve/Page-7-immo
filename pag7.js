const { objectTypeAnnotation } = require("@babel/types");

function generateOutput(current, total) {
  let output = "";
  // wenn total kleiner oder gleich 7 ist
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
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
  } else {
    //  wenn current groesser 4 oder total kleiner total - 4
    if (current > 4 || total < total - 4) {
      if (current === current) {
        output += `1 .. ${current - 1} [${current}] ${current + 1} .. ${total}`;
      }
    } else {
      if (current <= 4 || total <= total - 4) {
        for (let i = 1; i <= 5; i++) {
          if (i === current) {
            output += ` [${current}]`;
          } else {
            output += ` ${i}`;
          }
        }
        if (total === total) {
          output += ` .. ${total}`;
        }
      // } else {
      //   if ( total <= total - 4) {
      //     for (let i = 1; i <= total - 4; i++){}
        // }
      }
    }
  }

  return output;
}

module.exports = generateOutput;
