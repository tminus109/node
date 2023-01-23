function outOfRange(): string {
  return `This input is larger than the number this application can handle. Please, delete the last digit.`;
}

function notANum(): string {
  return `This is not a number. Please, use Arabic numbers only ("0-9"). You may use the plus ("+") and minus ("-") signs as the first character of your input. Use dot (".") as decimal separator. Delete the invalid character(s). Beware of empty characters ("space").`;
}

export { outOfRange, notANum };
