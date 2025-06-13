const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(Numbers) {
  let sum = 0;
  Numbers.forEach( num => {
    sum += num;
  })
  return +sum;
};

const multiply = function(Numbers) {
  let multi = 1;
  Numbers.forEach(num => {
    multi *= num;
  });
  return +multi;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  else{
    return (num * factorial(num -1 ));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
