function getScale(num: number): string {
  let word = "";

  switch (num) {
    case 1:
      word = "thousand";
      break;
    case 2:
      word = "million";
      break;
    case 3:
      word = "billion";
      break;
    case 4:
      word = "trillion";
      break;
    case 5:
      word = "quadrillion";
      break;
    case 6:
      word = "quintillion";
      break;
    case 7:
      word = "sextillion";
      break;
    case 8:
      word = "septillion";
      break;
    case 9:
      word = "octillion";
      break;
    case 10:
      word = "nonillion";
      break;
    case 11:
      word = "decillion";
      break;
    case 12:
      word = "undecillion";
      break;
    case 13:
      word = "duodecillion";
      break;
    case 14:
      word = "tredecillion";
      break;
    case 15:
      word = "quattuordecillion";
      break;
    case 16:
      word = "quindecillion";
      break;
    case 17:
      word = "sexdecillion";
      break;
    case 18:
      word = "septendecillion";
      break;
    case 19:
      word = "octodecillion";
      break;
    case 20:
      word = "novemdecillion";
      break;
    case 21:
      word = "vigintillion";
      break;
    default:
      word = "";
      break;
  }

  return word;
}

export default getScale;
