/**
 * Title : Routes
 * Descriptions: Application Routes
 * Author: Md. Rakibul Islam
 * Date: 23/09/2022
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
