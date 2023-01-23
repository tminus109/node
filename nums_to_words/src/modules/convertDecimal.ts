import convertUnit from "./units.js";

function convertDecimal(num: string): string {
  let phrase = " point";

  for (const digit of num) {
    phrase += " " + convertUnit(digit);
  }

  return phrase;
}

export default convertDecimal;
