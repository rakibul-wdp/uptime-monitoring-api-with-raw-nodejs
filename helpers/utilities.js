/**
 * Title: Utilities
 * Description: Important utility function
 * Author: Md. Rakibul Islam
 * Date: 07/10/2022
 */

// dependencies

// module scaffolding
const utilities = {};

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

// export module
module.exports = utilities;
