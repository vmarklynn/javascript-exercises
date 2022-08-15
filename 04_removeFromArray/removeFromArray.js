const removeFromArray = function (arr, ...args) {
  args.forEach(el => {
    if (arr.includes(el)) {
      arr.splice(arr.indexOf(el), 1);
    }
  });
  return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
