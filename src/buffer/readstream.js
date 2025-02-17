/* eslint-disable unicorn/prefer-module */

const fs = require('node:fs');

const ourReadStream = fs.createReadStream(`${__dirname}/hello.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data', (chunk) => {
  ourWriteStream.write(chunk);
});

console.table(Object.getOwnPropertyNames(fs));
