const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.split('').splice(email.lastIndexOf('@')+1, ((email.length) - email.lastIndexOf('@'))).join('');
}

module.exports = {
  getEmailDomain
};
