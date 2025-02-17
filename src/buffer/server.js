/* eslint-disable no-magic-numbers */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/prefer-module */

const http = require('node:http'); // Ensure http module is required

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`
      <html>
        <head><title>Form</title></head>
        <body>
          <form method="post" action="/process">
            <input name="message" />
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  } else if (req.url === '/process' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      console.log('Finish');
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      res.write('Thank You');
      res.end();
    });
  } else {
    res.write('Not found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
