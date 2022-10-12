/**
 * Title: Utilities
 * Description: Important utility function
 * Author: Md. Rakibul Islam
 * Date: 07/10/2022
 */

// dependencies

// module scaffolding
const crypto = require('crypto');

const utilities = {};
const environment = require('./environments');

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

// hash string
utilities.hash = (str) => {
  if (typeof str === 'string' && str.length > 0) {
    const hash = crypto.createHmac('sha256', environment.secretKey).update(str).digest('hex');
    return hash;
  }
  return false;
};

// hash string
utilities.createRandomString = (strLength) => 'haldjalkajdslkfj';

// export module
module.exports = utilities;
