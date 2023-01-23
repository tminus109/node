function convertTen(num: string): string {
  let word = "";

  switch (num) {
    case "1":
      word = "ten";
      break;
    case "2":
      word = "twenty";
      break;
    case "3":
      word = "thirty";
      break;
    case "4":
      word = "forty";
      break;
    case "5":
      word = "fifty";
      break;
    case "6":
      word = "sixty";
      break;
    case "7":
      word = "seventy";
      break;
    case "8":
      word = "eighty";
      break;
    case "9":
      word = "ninety";
      break;
    default:
      word = "";
      break;
  }

  return word;
}

export default convertTen;
