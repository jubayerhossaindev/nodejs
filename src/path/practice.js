/* eslint-disable sonarjs/no-duplicate-string */
import path from 'node:path';

console.log(path.basename('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));
console.log(path.basename('E:/LearnWithSumit/NodeJS/bagladesh/index.js', '.js'));

console.log(path.delimiter);

console.log('Full Path', process.env.path);
console.log(
  'User Path',
  process.env.path.split(';').filter((p) => p.includes('Users'))
);

console.log(
  'System Path',
  process.env.path.split(';').filter((p) => !p.includes('Users'))
);

console.log(path.dirname('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));

console.log(path.extname('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));

console.log(
  path.format({
    root: 'E:/',
    dir: 'E:/LearnWithSumit/NodeJS/bagladesh',
    ext: '.js',
    name: 'index',
  })
);
console.log(path.parse('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));

console.log(path.isAbsolute('E:/LearnWithSumit/NodeJS/bagladesh/index.js'));
console.log(path.isAbsolute('index.js'));
console.log(path.join('src', 'folder', 'dhaka.js'));

console.log(path.normalize('src/////dahak////borisal////'));
console.log(
  path.relative(
    'E:/LearnWithSumit/NodeJS/bagladesh/index.js',
    'E:/LearnWithSumit/NodeJS/bagladesh/src/path/index.js'
  )
);

console.log(path.resolve('src', 'index.js'));

console.log(path.sep);
console.log(path.toNamespacedPath('E:/LearnWithSumit/NodeJS/bagladesh/src/path/index.js'));
