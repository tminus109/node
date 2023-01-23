import convertNumToPhrase from "../modules/convertNumToPhrase";

describe("various input tests", () => {
  test("input is 7", () => {
    const input = convertNumToPhrase("7");
    expect(input).toBe("seven");
  });

  test("input is 42", () => {
    const input = convertNumToPhrase("42");
    expect(input).toBe("forty-two");
  });

  test("input is 1999", () => {
    const input = convertNumToPhrase("1999");
    expect(input).toBe("one thousand nine hundred and ninety-nine");
  });

  test("input is 2001", () => {
    const input = convertNumToPhrase("2001");
    expect(input).toBe("two thousand and one");
  });

  test("input is 17999", () => {
    const input = convertNumToPhrase("17999");
    expect(input).toBe("seventeen thousand nine hundred and ninety-nine");
  });

  test("input is 100001", () => {
    const input = convertNumToPhrase("100001");
    expect(input).toBe("one hundred thousand and one");
  });

  test("input is 342251", () => {
    const input = convertNumToPhrase("342251");
    expect(input).toBe(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
  });

  test("input is 1300420", () => {
    const input = convertNumToPhrase("1300420");
    expect(input).toBe(
      "one million three hundred thousand four hundred and twenty"
    );
  });

  test("input is -789123.12", () => {
    const input = convertNumToPhrase("-789123.12");
    expect(input).toBe(
      "minus seven hundred and eighty-nine thousand one hundred and twenty-three point one two"
    );
  });

  test("input is 7.8", () => {
    const input = convertNumToPhrase("7.8");
    expect(input).toBe("seven point eight");
  });

  test("input is -0.8", () => {
    const input = convertNumToPhrase("-0.8");
    expect(input).toBe("minus zero point eight");
  });

  test("input is 00.8", () => {
    const input = convertNumToPhrase("00.8");
    expect(input).toBe("zero point eight");
  });

  test("input is 0", () => {
    const input = convertNumToPhrase("0");
    expect(input).toBe("zero");
  });

  test("input is 00", () => {
    const input = convertNumToPhrase("00");
    expect(input).toBe("zero");
  });

  test("input is n", () => {
    const input = convertNumToPhrase("n");
    const output = `This is not a number. Please, use Arabic numbers only ("0-9"). You may use the plus ("+") and minus ("-") signs as the first character of your input. Use dot (".") as decimal separator. Delete the invalid character(s). Beware of empty characters ("space").`;
    expect(input).toBe(output);
  });

  test("input is 100o0", () => {
    const input = convertNumToPhrase("100o0");
    const output = `This is not a number. Please, use Arabic numbers only ("0-9"). You may use the plus ("+") and minus ("-") signs as the first character of your input. Use dot (".") as decimal separator. Delete the invalid character(s). Beware of empty characters ("space").`;
    expect(input).toBe(output);
  });

  test("input is larger than largest num", () => {
    const input = convertNumToPhrase(
      "1999999999999999999999999999999999999999999999999999999999999999999"
    );
    const output = `This input is larger than the number this application can handle. Please, delete the last digit.`;
    expect(input).toBe(output);
  });

  test("input is 0032", () => {
    const input = convertNumToPhrase("0032");
    expect(input).toBe("thirty-two");
  });
});
