// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let letter = "";
  for (let character of str) {
    if (charMap[character]) {
      charMap[character]++;
    } else {
      charMap[character] = 1;
    }
  }
  console.log(charMap);
  for (let character in charMap) {
    console.log(character);
    if (charMap[character] > max) {
      max = charMap[character];
      letter = character;
    }
  }
  return letter;
}

module.exports = maxChar;
