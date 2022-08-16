const palindromes = function (string) {

  let lowerCase = string.toLowerCase();
  let processedString = '';
  for (let i = 0; i < lowerCase.length; i++) {
    let current = lowerCase.charAt(i);
    if (isLetter(current)) {
      processedString += current;
    };
  }

  let reversed = processedString.split('').reverse().join('');

  for (let i = 0; i < processedString.length; i++) {
    if (processedString.charAt(i) != reversed.charAt(i)) {
      return false;
    }
  }

  return true;
};

const isLetter = function (char) {
  return (/[a-z]/).test(char);
}

// Do not edit below this line
module.exports = palindromes;
