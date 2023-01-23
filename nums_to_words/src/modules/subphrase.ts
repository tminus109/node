import convertTen from "./tens.js";
import convertUnit from "./units.js";

function getSubphrase(chunkParam: string[]): string {
  let chunk = chunkParam;
  const l = chunk.length;
  let chunkAsNum = 0;
  let subphrase = "";

  if (l === 1) {
    chunkAsNum = Number(chunk[0]);
  } else if (l === 2) {
    chunkAsNum = Number(chunk[0].concat(chunk[1]));
  } else {
    chunkAsNum = Number(chunk[0].concat(chunk[1]).concat(chunk[2]));
  }

  if (chunkAsNum >= 100) {
    subphrase += " " + convertUnit(chunk[0]) + " hundred";
    if (chunkAsNum % 100 !== 0) {
      subphrase += " and";
    }
    chunk = [chunkParam[1], chunkParam[2]];
    chunkAsNum = Number(chunk[0].concat(chunk[1]));
  }

  if (chunkAsNum < 20 && chunkAsNum !== 0) {
    subphrase += " " + convertUnit(String(chunkAsNum));
  } else if (chunkAsNum >= 20) {
    subphrase += " " + convertTen(chunk[0]);
    if (chunkAsNum % 10 !== 0) {
      subphrase += "-" + convertUnit(chunk[1]);
    }
  }

  return subphrase.trim();
}

export default getSubphrase;
