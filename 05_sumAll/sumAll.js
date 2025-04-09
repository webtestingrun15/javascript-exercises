const sumAll = function(start,end) {
  let sum = 0;

  if (typeof start !== 'number' || typeof end !== 'number') { return sum = "ERROR"; }
  else if (start < end ) {
    for (let i = start; i <= end; i++) {
      if (start < 0 || !Number.isInteger(start)) { return sum = "ERROR";}
      sum += i;
    }
  } else if (start > end) {
      for (let i = end; i <= start; i++) {
        if (end < 0 || !Number.isInteger(end)) { return sum = "ERROR"; }
        sum += i;
  }
}
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
