import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let a = {};
  for (let j = 0; j < domains.length; j++) {
    let arr = domains[j].split('.');  
    let s = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      s += '.' + arr[i];
      if (s in a) { a[`${s}`] += 1; }
      else { a[`${s}`] = 1; }
    }
  } 

  return a;
}
