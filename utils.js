const fs = require('fs');
let reg = new RegExp("<in>(.*?)<\/in>");
let greg = new RegExp("<in>(.*?)<\/in>",'g');
let flag = false;
let tag;
function replace (buffer,options={tag:"in"}){
  if(!flag){
    tag = options.tag;
    flag = true;
  }
  var insource = buffer.toString();
  if(reg.test(insource)){
    insource = insource.replace(greg,function(match,path){
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
