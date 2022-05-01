const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let allDNS = [];
  let obj = {};

  let corrected = domains.map(elem => {
    return elem.split('.')
  });

  corrected.forEach(elem => {
    for (let i = 0; i < elem.length; i++){
      //console.log(elem.slice(i).join('.') + '.');
      allDNS.push('.'+ elem.slice(i).reverse().join('.') );
    }
  });


  allDNS.sort((a,b)=> a.length-b.length).forEach(elem => {
    if (obj[elem]) obj[elem]+=1;
    else obj[elem]=1;
  });

  return('object', obj)
}

module.exports = {
  getDNSStats
};
