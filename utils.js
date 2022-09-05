const fs = require('fs');
let tag,reg,greg,flag = false;
const replace = (buffer, options) => {
  if(!flag){
    tag = options.tag;
    reg = new RegExp(`<${tag}>(.*?)</${tag}>`);
    greg = new RegExp(`<${tag}>(.*?)</${tag}>`,'g');
    flag = true;
  }
  var insource = buffer.toString();
  if(reg.test(insource)){
    insource = insource.replace(greg,(match,path) => {
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
