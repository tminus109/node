function convertUnit(num: string): string {
  let word = "";

  switch (num) {
    case "0":
      word = "zero";
      break;
    case "1":
      word = "one";
      break;
    case "2":
      word = "two";
      break;
    case "3":
      word = "three";
      break;
    case "4":
      word = "four";
      break;
    case "5":
      word = "five";
      break;
    case "6":
      word = "six";
      break;
    case "7":
      word = "seven";
      break;
    case "8":
      word = "eight";
      break;
    case "9":
      word = "nine";
      break;
    case "10":
      word = "10";
      break;
    case "11":
      word = "eleven";
      break;
    case "12":
      word = "twelve";
      break;
    case "13":
      word = "thirteen";
      break;
    case "14":
      word = "fourteen";
      break;
    case "15":
      word = "fifteen";
      break;
    case "16":
      word = "sixteen";
      break;
    case "17":
      word = "seventeen";
      break;
    case "18":
      word = "eighteen";
      break;
    case "19":
      word = "nineteen";
      break;
    case ".":
      word = "point";
      break;
    default:
      word = "";
      break;
  }

  return word;
}

export default convertUnit;
