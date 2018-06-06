const { getOptions } = require('loader-utils');
const utils = require('./utils.js');

module.exports = function(source) {
  const options = getOptions(this);
  console.log(options);
  return utils.replace(source,options);
}
