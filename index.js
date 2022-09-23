/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API monitor up or down time of user defined links
 * Author: Md. Rakibul Islam
 * Date: 23/09/2022
 */

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 5000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = (req, res) => {
  // request handling
  // get the url parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder('utf-8');
  let realData = '';

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();

    console.log(realData);
    // response handle
    res.end('Hello programmer');
  });
};

// start the server
app.createServer();
