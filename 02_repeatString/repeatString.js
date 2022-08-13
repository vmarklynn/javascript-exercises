const repeatString = function (string, quantity) {
  if (quantity < 0) return 'ERROR';
  newString = '';
  for (let i = 0; i < quantity; i++) {
    newString += string;
  }
  return newString;

};

// Do not edit below this line
module.exports = repeatString;
