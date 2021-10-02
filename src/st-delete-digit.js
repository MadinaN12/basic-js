import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = String(n);
  let len = str.length;
  for (let i = 0; i < 10; i++) {
    str = str.replace(i, '');
    if (len > str.length) {
      break;
    }
  }
  
  return Number(str);
}