/* eslint-disable unicorn/import-style */
// import path from 'node:path';

// console.log(path.basename('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));
// console.log(path.basename('E:/LearnWithSumit/NodeJS/bagladesh/index.js', '.js'));

// console.log(path.delimiter);
// console.log(process.env.path);

// console.log(
//   'Users Path',
//   process.env.path.split(';').filter((p) => p.includes('Users'))
// );
// console.log(process.env.path.split(';').filter((p) => !p.includes('Users')));

// console.log(path.extname('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));

// console.log(
//   path.format({
//     root: 'E:/',
//     dir: 'E:/LearnWithSumit/NodeJS/bagladesh',
//     ext: '.js',
//     name: 'index',
//   })
// );

// console.log(path.isAbsolute('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));

// console.log(path.join('src', 'components', path.join('Route', 'dhka')));

// console.log(path.normalize('src////////dev//////folder'));

// console.log(path.parse('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));
// console.log(path.posix.delimiter);
// console.log(
//   path.relative(
//     'E:/LearnWithSumit/NodeJS/bagladesh/index.js',
//     'E:/LearnWithSumit/NodeJS/bagladesh/src/path/index.js'
//   )
// );

// console.log(path.resolve('src', 'index'));

// console.log(path.sep);
// console.log(path.win32.delimiter);

// const longPath = String.raw`E:\VeryLongDirectoryName\SubDirectoryWithALongName\AnotherSubDirectory\MoreNestedFolders\EvenMoreFolders\SomeAdditionalFolders\AReallyLongFileNameThatKeepsGoingOnAndOnAndOnAndOnAndFinallyEnds.txt`;

// console.log(path.toNamespacedPath(longPath));

// const filePath = 'E:/LearnWithSumit/NodeJS/bagladesh/index.js';
// const pattern = /\.js$/; // ".js" ফাইলের জন্য

import { dirname } from 'node:path';

import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(pathToFileURL(__filename).href);
console.log(__dirname);
