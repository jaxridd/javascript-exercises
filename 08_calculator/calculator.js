const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	const sum = arr.reduce((total, num) => {
    return total + num;
  }, 0)
  return sum;
};

const multiply = function(arr) {
  const multiplies = arr.reduce((total, num) => total * num, 1)
  return multiplies;
};

const power = function(a, b) {
  let sum = 1
	for(b; b > 0; b--) {
    sum = sum * a;
  }
  return sum;
};

const factorial = function(a) {
	let sum = 1
  for(a; a > 0; a--) {
    sum = sum * a;
  }
  return sum;
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
