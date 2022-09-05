const utils = require('./utils.js');

module.exports = function(source) {
  const options = this.getOptions() || {tag:"in"};
  return utils.replace(source,options);
}
