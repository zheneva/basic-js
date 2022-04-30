const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = '';
  if (!Array.isArray(members)) return false;
  if (members.length == 0) return false;

  members.forEach(string => {
    if (typeof string == 'string') str += string.trim()[0];
  })

  console.log('str', str.split('').sort().join('').toUpperCase());
  return str.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
