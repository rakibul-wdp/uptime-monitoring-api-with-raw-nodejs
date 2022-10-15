/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API monitor up or down time of user defined links
 * Author: Md. Rakibul Islam
 * Date: 23/09/2022
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

// @TODO remove later
sendTwilioSms('01911111111', 'Hello world', (err) => {
  console.log('this is the error', err);
});

// configuration
app.config = {
  port: 3000,
};

// testing file system
// @TODO: delete after some time
data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
  console.log(err);
});

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}`);
  });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
