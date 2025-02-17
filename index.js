// /* eslint-disable unicorn/consistent-destructuring */
// /* eslint-disable security/detect-eval-with-expression */
// /* eslint-disable security/detect-non-literal-fs-filename */
// /* eslint-disable unicorn/prefer-module */

// const fs = require('node:fs');
// const path = require('node:path');

// function loadModule(filePath) {
//   // Read the module's source code from the file
//   const moduleCode = fs.readFileSync(filePath, 'utf8');

//   // Create a module object (as Node.js does)
//   const module = { exports: {} };
//   const { exports } = module;
//   const __filename = filePath;
//   const __dirname = path.dirname(filePath);

//   // Node.js wraps the module code in a function before execution
//   const wrapper = `(function (exports, require, module, __filename, __dirname) { ${moduleCode} \n})`;

//   // Evaluate the wrapper function
//   const compiledWrapper = eval(wrapper);

//   // Call the wrapped function with injected variables
//   compiledWrapper(exports, require, module, __filename, __dirname);

//   // Return the module's exports
//   return module.exports;
// }

// // Example: Create a fake module file and load it
// const fakeModulePath = './fakeModule.js';

// // Simulating a module's code inside a file
// fs.writeFileSync(
//   fakeModulePath,
//   `
//   console.log(__filename);
//   console.log(__dirname);
//   exports.greet = function(name) {
//       return 'Hello, ' + name + '!';
//   };
// `,
//   'utf8'
// );

// // Load the module dynamically (like Node.js)
// const loadedModule = loadModule(fakeModulePath);
// console.log(loadedModule.greet('Alice')); // Output: Hello, Alice!

// // Cleanup: Remove the fake module file
// fs.unlinkSync(fakeModulePath);
