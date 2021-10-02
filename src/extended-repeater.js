import { NotImplementedError } from '../extensions/index.js';

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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);
  
  if (!options.separator) {
    options.separator = '+'
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  
  let ans = [];
  
  if (options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      let arr = [];
      if (options.addition !== 'undefined') {
        if (options.additionRepeatTimes > 0) {
          for (let j = 0; j < options.additionRepeatTimes; j++) {
            arr.push(options.addition);
          }
          ans.push(str + arr.join(options.additionSeparator));
        } else {
          ans.push(str + options.addition);
        }
      } else {
        ans.push(str);
      }
    }
  } else {
    let arr = [];
    if (options.additionRepeatTimes > 0) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        arr.push(options.addition);
      }
      ans.push(str + arr.join(options.additionSeparator));
    } else {
      ans.push(str + options.addition);
    }
  }
  return ans.join(options.separator);
}
