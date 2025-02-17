/* eslint-disable unicorn/prevent-abbreviations */
import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Programmer');
    res.write(' How are you?');
    res.end();
  } else if (req.url === '/about') {
    res.write('This is about page');
    res.end();
  } else {
    res.write('Not Found');
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log('Server is listening on http://localhost:3000');
});
