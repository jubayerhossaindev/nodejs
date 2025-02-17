// Node.js Path Module Examples
import path from 'node:path';

console.log('✅ Node.js Path Module Examples\n');

// 1️⃣ Absolute Path তৈরি করা (resolve)
console.log('📌 path.resolve:', path.resolve('src', 'index.js'));

// 2️⃣ Path ঠিক করা (normalize)
console.log('📌 path.normalize:', path.normalize('src//folder/..//index.js'));

// 3️⃣ Absolute Path কিনা চেক করা (isAbsolute)
console.log('📌 path.isAbsolute (Absolute Path):', path.isAbsolute('/home/user/index.js'));
console.log('📌 path.isAbsolute (Relative Path):', path.isAbsolute('index.js'));

// 4️⃣ Path একসাথে যোগ করা (join)
console.log('📌 path.join:', path.join('src', 'folder', 'index.js'));

// 5️⃣ দুই path-এর পার্থক্য বের করা (relative)
console.log('📌 path.relative:', path.relative('/home/user/docs', '/home/user/photos'));

// 6️⃣ Directory name বের করা (dirname)
console.log('📌 path.dirname:', path.dirname('/home/user/docs/file.txt'));

// 7️⃣ File name বের করা (basename)
console.log('📌 path.basename:', path.basename('/home/user/docs/file.txt'));
console.log(
  '📌 path.basename without extension:',
  path.basename('/home/user/docs/file.txt', '.txt')
);

// 8️⃣ File extension বের করা (extname)
console.log('📌 path.extname:', path.extname('/home/user/docs/file.txt'));

// 9️⃣ Object থেকে Path বানানো (format)
console.log(
  '📌 path.format:',
  path.format({
    dir: '/home/user/docs',
    base: 'file.txt',
  })
);

// 🔟 Path কে Object-এ পরিবর্তন করা (parse)
console.log('📌 path.parse:', path.parse('/home/user/docs/file.txt'));

// 🔵 Windows & POSIX Separators
console.log('📌 path.sep (Path Separator):', path.sep);
console.log('📌 path.delimiter (Path Delimiter):', path.delimiter);
console.log('📌 POSIX Separator:', path.posix.sep);
console.log('📌 Windows Separator:', path.win32.sep);
