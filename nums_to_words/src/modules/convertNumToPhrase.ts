import convertWholeNum from "./convertWholeNum.js";
import convertDecimal from "./convertDecimal.js";
import { notANum, outOfRange } from "./errorMessages.js";
import getLargestNum from "./largestNum.js";

function convertNumToPhrase(num: string): string {
  let phrase = "";
  let wholeNum = "";
  let decimal = "";

  if (num.includes(".")) {
    wholeNum = num.slice(0, num.indexOf("."));
    decimal = num.slice(num.indexOf(".") + 1);
  } else {
    wholeNum = num;
  }

  if (num.charAt(0) === "-") {
    phrase += "minus ";
    wholeNum = wholeNum.slice(1);
  } else if (num.charAt(0) === "+") {
    phrase += "plus ";
    wholeNum = wholeNum.slice(1);
  }

  if (/\D/.test(wholeNum) || /\D/.test(decimal)) {
    phrase = notANum();
  } else {
    if (BigInt(wholeNum) > getLargestNum() || num.length > 67) {
      phrase = outOfRange();
    } else {
      if (BigInt(wholeNum) === 0n && wholeNum.length !== 0) {
        phrase += "zero";
      } else {
        wholeNum = String(BigInt(wholeNum));
        phrase += convertWholeNum(wholeNum);
      }

      if (num.charAt(num.length - 1) === ".") {
        phrase += " point";
      }

      if (decimal !== "") {
        phrase += convertDecimal(decimal);
      }
    }
  }

  return phrase;
}

export default convertNumToPhrase;
