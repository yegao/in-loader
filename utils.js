const fs = require('fs');

function replace (buffer){
  var insource = buffer.toString();
  if(/<in>(.*?)<\/in>/.test(insource)){
    insource = insource.replace(/<in>(.*?)<\/in>/g,function(match,path){
      let buffer = fs.readFileSync(path);
      return replace(buffer);
    });
  }
  return insource
}

const utils = {
  replace
}
module.exports = utils;
