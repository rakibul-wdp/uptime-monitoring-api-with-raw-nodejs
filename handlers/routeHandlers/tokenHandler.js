/**
 * Title: Token Handler
 * Description: Handler to handle token related routes
 * Author: Md. Rakibul Islam
 * Date: 12/10/2022
 */

// dependencies
const data = require('../../lib/data');
// const { hash } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
  const acceptedMethods = ['get', 'post', 'put', 'delete'];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._token[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {};

// Authentication
handler._token.get = (requestProperties, callback) => {};

// Authentication
handler._token.put = (requestProperties, callback) => {};

// Authentication
handler._token.delete = (requestProperties, callback) => {};

module.exports = handler;
