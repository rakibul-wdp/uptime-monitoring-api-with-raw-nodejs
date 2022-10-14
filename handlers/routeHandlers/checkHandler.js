/**
 * Title: Check Handler
 * Description: Handler to handle user defined checks
 * Author: Md. Rakibul Islam
 * Date: 14/10/2022
 */

// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
const { parseJSON } = require('../../helpers/utilities');
const { tokenHandler } = require('./tokenHandler');

// module scaffolding
const handler = {};

handler.checkHandler = (requestProperties, callback) => {
  const acceptedMethods = ['get', 'post', 'put', 'delete'];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._check[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._check = {};

handler._check.post = (requestProperties, callback) => {
  // validate inputs
  const protocol = typeof requestProperties.body.protocol;
  'string'[('http', 'https')].indexOf(requestProperties.body.protocol) > -1
    ? requestProperties.body.protocol
    : false;

  const url =    typeof requestProperties.body.url === 'string' && requestProperties.body.url.trim().length > 0
      ? requestProperties.body.url
      : false;

  const method = typeof requestProperties.body.method;
  'string'[('get', 'post', 'put', 'delete')].indexOf(requestProperties.body.method) > -1
    ? requestProperties.body.method
    : false;

  const successCodes = typeof requestProperties.body.successCodes === 'object';
  requestProperties.body.successCodes instanceof Array
    ? requestProperties.body.successCodes
    : false;

  const timeoutSeconds = typeof requestProperties.body.timeoutSeconds === 'number';
  requestProperties.body.timeoutSeconds % 1 === 0
  && requestProperties.body.timeoutSeconds >= 1
  && requestProperties.body.timeoutSeconds <= 5
    ? requestProperties.body.successCodes
    : false;
};

handler._check.get = (requestProperties, callback) => {};

handler._check.put = (requestProperties, callback) => {};

handler._check.delete = (requestProperties, callback) => {};

module.exports = handler;
