function getChunks(num: string) {
  const chunks: string[][] = [];
  let chunk: string[] = [];
  let j = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    chunk.unshift(num.charAt(i));
    j++;
    if (j === 3) {
      chunks.unshift(chunk);
      chunk = [];
      j = 0;
    }
  }

  if (chunk.length > 0) {
    chunks.unshift(chunk);
  }

  return chunks;
}

export default getChunks;
