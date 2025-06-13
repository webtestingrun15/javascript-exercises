const convertToCelsius = function(temp) {
  const toCelsius = (temp - 32) * (5/9);
  const rounded = Math.round(toCelsius * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(temp) {
  const toFahrenheit = (temp * 9/5 + 32)
  const rounded = Math.round(toFahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
