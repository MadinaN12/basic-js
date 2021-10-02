import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let n = 1;
  let ans = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) n++;
    else {
      if (n > 1) ans += n + str[i];
      else ans += str[i];
      n = 1;
    }
  }

  return ans;
}
