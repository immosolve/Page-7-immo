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
    return output;
  }

  //  wenn current groesser 4 und  current  kleiner als  total - 4
  if (current > 4 && current < total - 4) {
    return `1 .. ${current - 1} [${current}] ${current + 1} .. ${total}`;
  }

  if (current <= 4) {
    for (let i = 1; i <= 5; i++) {
      if (i === current) {
        output += `[${current}] `;
      } else {
        output += `${i} `;
      }
    }
    if (total === total) {
      output += `.. ${total}`;
    }
  } else {
    //  wenn current groesser / gleich total - 4
    if (current >= total - 4) {
      output += `1 .. `;
      for (let i = total - 4; i <= total; i++) {
        //  i ist gleich total -4 zaehle von i bis total
        if (current === i) {
          output += `[${i}] `;
        }else {
          output += `${i} `
        }
       
      }
    }
  }
  return output;
}

module.exports = generateOutput;
