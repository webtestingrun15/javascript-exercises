const palindromes = function (chars) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let orgChars = chars.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");
  let reverseChars = orgChars.split("").reverse().join("");
  return reverseChars === orgChars;

};

// Do not edit below this line
module.exports = palindromes;
