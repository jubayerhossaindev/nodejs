// Simulating a module system in Node.js
function moduleWrapper(moduleCode, filename) {
  const exports = {};
  const module = { exports };
  const __filename = filename;
  const __dirname = require('node:path').dirname(__filename);

  // Mimic Node.js's wrapping mechanism
  const wrapperFunction = new Function(
    'exports',
    'require',
    'module',
    '__filename',
    '__dirname',
    moduleCode
  );

  // Execute the wrapped function
  wrapperFunction(exports, require, module, __filename, __dirname);

  // Return the module.exports object as Node.js does
  return module.exports;
}

// Example: Mimic loading a module from a string
const moduleCode = `
  console.log(__filename);
  console.log(__dirname);
  exports.greet = function(name) {
      return 'Hello, ' + name + '!';
  };
`;

// Simulating a module file path
const loadedModule = moduleWrapper(moduleCode, '/home/user/project/myModule.js');

// Using the exported function
console.log(loadedModule.greet('Alice'));
