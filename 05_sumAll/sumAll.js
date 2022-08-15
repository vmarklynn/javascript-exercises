const sumAll = function (a, b) {
  if ((typeof (a) === 'number' && typeof (b) === 'number') && (a >= 0 && b >= 0)) {
    let accum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      accum += i;
    }
    return accum;
  }
  return 'ERROR';


};

// Do not edit below this line
module.exports = sumAll;
