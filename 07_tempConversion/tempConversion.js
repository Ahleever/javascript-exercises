const convertToCelsius = function(temp) {
  let celsiusConversion = Math.round(((temp - 32) * (5/9))*10)/10;
  return celsiusConversion
};

const convertToFahrenheit = function(temp) {
  let fahrenheitConversion = Math.round(((temp* (9/5)) +32)*10)/10;
  return fahrenheitConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
