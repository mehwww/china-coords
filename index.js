const cities = require('./cities');
const provinces = require('./provinces');

exports.cities = cities;

exports.provinces = provinces;

const cityKeys = Object.keys(cities);

exports.findCity = function(cityName) {
  const name = cityName.replace(/(市|盟|州|县|区|地区)$/, '');
  var result = null;
  for (var i = 0; i < cityKeys.length; i += 1) {
    if (cityKeys[i].match(new RegExp('^' + name))) {
      result = cities[cityKeys[i]];
      break;
    }
  }
  return result;
}
