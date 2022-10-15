/**
 * Title: Environments
 * Description: Handle all environment related thins
 * Author: Md. Rakibul Islam
 * Date: 27/09/2022
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: 'staging',
  secretKey: 'hkalsdkdfalsdkfjlasdfsl',
  maxChecks: 5,
};

environments.production = {
  port: 5000,
  envName: 'production',
  secretKey: 'hkalslksdjflslieowasdfsl',
  maxChecks: 5,
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

// export module
module.exports = environmentToExport;
