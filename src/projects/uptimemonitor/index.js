/* eslint-disable unicorn/prefer-string-replace-all */
/* eslint-disable unicorn/prevent-abbreviations */
/**
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: "Jubayer Hossain Jewel"
 * Date: 15/02/2025
 * Version: 1.0.0
 * License: MIT
 */

// Dependencies
import http from 'node:http';
import { StringDecoder } from 'node:string_decoder';
import url from 'node:url';

// App Object - Module Scaffolding
const app = {};

// Configuration
app.config = {
  PORT: 3000,
};

// Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.PORT, () => {
    console.log(`Server is running on http://localhost:${app.config.PORT}`);
  });
};

// Handle Request and Response
app.handleReqRes = (req, res) => {
  // Parse the URL
  const parseURL = url.parse(req.url, true);

  // Extract path and trim leading/trailing slashes using a regular expression
  const path = parseURL.pathname;
  const trimPath = path.replace(/^\/+|\/+$/g, ''); // Using replace for trimming slashes
  const method = req.method.toLowerCase();
  const queryString = parseURL.query;
  const headerObject = req.headers;

  console.log(headerObject);
  console.log(method);
  console.log(queryString);
  console.log(`Requested Path: ${path}`);
  console.log(`Trimmed Path: ${trimPath}`);

  const decoder = new StringDecoder('utf8'); // Using 'utf8' to comply with ESLint rule
  let realdata = ''; // 'realdata' is declared but not used

  // Attach the data event to 'req' (not 'res')
  req.on('data', (buffer) => {
    realdata += decoder.write(buffer); // Collect data in realdata
  });

  // When the request is done (all data is received)
  req.on('end', () => {
    realdata += decoder.end(); // End of data stream
    console.log(realdata); // Log the POST body data
    res.end('Hello Bangladesh How are you?');
  });
};

// Start Server
app.createServer();
