const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS'
 * 
 */
function repeater(str, options) {
  let output = '';
  for (let i = 0; i < (options.repeatTimes||1); i++){
    output+=str;
    if(typeof options.addition != 'undefined'){
      for(let j=0;j<(options.additionRepeatTimes||1);j++){
        output+=options.addition;
        console.log('index',j);
        if (j == (options.additionRepeatTimes||1)-1) break;
output+=(options.additionSeparator?options.additionSeparator:'|');
      }
    }


    if (i == (options.repeatTimes||1) -1) break;
    output+=options.separator?options.separator:'+';
  }




  return (output);
}

module.exports = {
  repeater
};
