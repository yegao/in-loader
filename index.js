const { getOptions } = require('loader-utils');
const utils = require('./utils.js');

module.exports = function(source) {
  const options = getOptions(this) || {tag:"in"};
  return utils.replace(source,options);
}
