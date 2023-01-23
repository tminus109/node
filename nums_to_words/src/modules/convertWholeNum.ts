import getChunks from "./chunksOfThrees.js";
import getScale from "./scales.js";
import getSubphrase from "./subphrase.js";

function convertWholeNum(num: string) {
  const chunks = getChunks(num);
  const length = chunks.length;
  let scale = length - 1;
  let phrase = "";

  for (let i = 0; i < length; i++) {
    const chunk = chunks[i];
    const chunkAsNum = Number(chunk[0].concat(chunk[1]).concat(chunk[2]));
    if (scale === 0 && chunkAsNum < 100 && chunkAsNum > 0) {
      phrase += " and";
    }
    phrase += " " + getSubphrase(chunk);
    if (chunkAsNum !== 0) {
      phrase += " " + getScale(scale);
    }
    scale--;
  }

  return phrase.trim();
}

export default convertWholeNum;
