const reverseString = function(input) {
const splitWord = input.split(""); //split("") split all characters

const reversedChars = splitWord.reverse();

const reversedString = reversedChars.join(""); // join("") to join all arrays together

return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
