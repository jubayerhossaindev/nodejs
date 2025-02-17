/* eslint-disable unicorn/prefer-module */

const fs = require('node:fs');

const ourReadStream = fs.createReadStream(`${__dirname}/hello.txt`);

ourReadStream.on('data', (chunk) => {
  console.log(chunk);
});

console.log('Hello');
