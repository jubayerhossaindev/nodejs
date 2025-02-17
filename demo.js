/* eslint-disable no-magic-numbers */

/**
 * @title Node.js HTTP Server
 * @description A well-structured, scalable, and optimized HTTP server using Node.js.
 * @author [Your Name or Team Name]
 * @date [Creation Date]
 * @version 1.0.0
 * @license MIT
 */

// 🔹 Import Required Modules
import http from 'node:http';
import { StringDecoder } from 'node:string_decoder';
import url from 'node:url';

// 🔹 Application Object - Server Container
const app = {};

// 🔹 Configuration Settings
app.config = {
  port: process.env.PORT || 3000,
};

app.handleRequest = (request, response) => {
  /*** 🔹 REQUEST HANDLER ***/

  // Parse URL and request details
  console.log(request.url);
  const parsedURL = url.parse(request.url, true);
  console.log(parsedURL);

  const path = parsedURL.pathname;
  console.log(path);

  const trimmedPath = path.replaceAll(/^\/+|\/+$/g, '');
  console.log(trimmedPath);

  const method = request.method.toLowerCase();
  console.log(method);

  const queryString = parsedURL.query;
  console.log(queryString);

  const { headers } = request;
  console.log(headers);

  /*** 🔹 BODY PARSING ***/
  const decoder = new StringDecoder('utf8');
  let body = '';
  console.log(decoder);

  request.on('data', (buffer) => {
    body += decoder.write(buffer);
  });

  request.on('end', () => {
    body += decoder.end();
    console.log(body);

    /*** 🔹 RESPONSE HANDLER ***/
    response.end('Hello, World!');
  });
};

// 🔹 Create and Start Server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);

  server.listen(app.config.port, () => {
    console.log(`🚀 Server is running at: http://localhost:${app.config.port}`);
  });
};

// 🔹 Application Entry Point
app.start = () => {
  app.createServer();
};

// 🔹 Start the Application
app.start();
