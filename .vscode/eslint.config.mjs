// Importing ESLint Parser and Configuration
import eslintParser from '@babel/eslint-parser'; // Babel ESLint parser for modern JavaScript
import eslintConfigAirbnbBase from 'eslint-config-airbnb-base';
import eslintConfigPrettier from 'eslint-config-prettier'; // Prettier configuration to disable conflicting ESLint rules
// Importing ESLint Core Packages
import eslintJs from '@eslint/js'; // ESLint core JavaScript configuration

// Importing ESLint Plugins for Best Practices
import eslintPluginImport from 'eslint-plugin-import'; // Plugin for ES6+ import/export syntax
import eslintPluginN from 'eslint-plugin-n'; // Node.js specific linting rules
import eslintPluginNode from 'eslint-plugin-node'; // Node.js specific linting rules
import eslintPluginOxlint from 'eslint-plugin-oxlint'; // Custom linting rules for enhanced code quality
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Integrate Prettier with ESLint
import eslintPluginPromise from 'eslint-plugin-promise'; // Enforce best practices with Promises
import eslintPluginSecurity from 'eslint-plugin-security'; // Identify security issues in JavaScript
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'; // Detect bugs and vulnerabilities
import eslintPluginUnicorn from 'eslint-plugin-unicorn'; // A collection of useful ESLint rules

// Importing Globals package
import globals from 'globals'; // Package to define global variables

export default [
  eslintPluginOxlint.configs['flat/recommended'], // Integrate custom oxlint configuration
  {
    files: ['**/*.js'], // Target all JavaScript files
    ignores: ['node_modules', 'dist', 'coverage'], // Files and directories to ignore
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module', // Allow ES modules
      parser: eslintParser,
      parserOptions: {
        requireConfigFile: false, // Allow using Babel without a separate config file
        babelOptions: {
          babelrc: false, // Disable .babelrc
          configFile: false, // Disable other config files
          presets: ['@babel/preset-env'], // Specify Babel presets
        },
      },
      globals: {
        ...globals.browser, // Global variables for browser environment
        ...globals.node, // Global variables for Node.js environment
        ...globals.es2021, // Global variables for ES2021 environment
        // Add or modify other global variables if necessary
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      node: eslintPluginNode,
      n: eslintPluginN,
      security: eslintPluginSecurity,
      promise: eslintPluginPromise,
      unicorn: eslintPluginUnicorn,
      sonarjs: eslintPluginSonarjs,
    },
    rules: {
      // Base rules
      ...eslintJs.configs.recommended.rules, // Spread the recommended rules
      ...eslintConfigPrettier.rules, // Spread Prettier rules
      ...eslintConfigAirbnbBase.rules,
      // Stylistic Issues
      indent: ['error', 2], // Enforce 2 spaces for indentation
      // "linebreak-style": ["error", "windows"], // Enforce UNIX linebreaks
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'always'], // Require semicolons
      'max-len': ['error', { code: 100 }], // Limit maximum line length

      // Best Practices
      eqeqeq: ['error', 'always'], // Require strict equality
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // Warn on unused variables
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // Limit multiple empty lines
      'prefer-const': 'error', // Require `const` for variables that are never reassigned
      'no-var': 'error', // Require `let` or `const` instead of `var`
      'consistent-return': 'error', // Require consistent return statements

      // Node.js Specific
      'node/no-unsupported-features/es-syntax': 'off', // Allow ES6 features
      'node/no-missing-import': 'error', // Prevent importing modules that don't exist
      'node/no-extraneous-import': 'error', // Prevent importing modules that are not listed in package.json
      'node/callback-return': 'warn', // Enforce callback return

      // Promise Best Practices
      'promise/catch-or-return': 'error', // Enforce handling of promises
      'promise/no-nesting': 'warn', // Disallow nesting of promises

      // Security Best Practices
      'security/detect-non-literal-fs-filename': 'warn', // Prevents non-literal file names in fs methods
      'security/detect-eval-with-expression': 'warn', // Prevents the use of eval() with dynamic expressions
      'security/detect-child-process': 'warn', // Disallows child process methods that could cause security issues

      // Unicorn Best Practices
      'unicorn/prefer-array-flat': 'error', // Prefer Array.flat() over Array.reduce()
      'unicorn/prefer-add-event-listener': 'warn', // Prefer addEventListener over inline event handlers

      // SonarJS Rules
      'sonarjs/no-duplicate-string': 'warn', // Detect duplicate strings
      'sonarjs/no-collapsible-if': 'warn', // Detect collapsible if statements
      'sonarjs/no-ignored-return': 'warn', // Detect ignored return values
      'sonarjs/no-same-line-conditional': 'warn', // Avoid same line conditionals

      // Additional Rules for Code Quality
      'no-empty-function': 'warn', // Disallow empty function definitions
      'no-implicit-globals': 'error', // Disallow declarations in the global scope to prevent variable collisions
      'no-magic-numbers': ['warn', { ignore: [0, 1] }], // Disallow magic numbers
      'consistent-this': ['error', 'self'], // Enforce a consistent naming for `this`
      'callback-return': ['error', ['callback', 'next']], // Enforce the use of a return statement in callbacks
      'global-require': 'error', // Enforce `require` calls to be in the top-level module scope
      'no-path-concat': 'error', // Disallow string concatenation with `__dirname` and `__filename`
      'require-await': 'error', // Disallow async functions which have no await expression
      'class-methods-use-this': 'error', // Enforce that class methods utilize `this`

      // Miscellaneous Best Practices
      'prefer-arrow-callback': 'error', // Prefer arrow functions as callbacks
      'no-new': 'error', // Disallow the use of `new` for side effects
      'no-throw-literal': 'error', // Disallow throwing literals as exceptions
      'no-useless-concat': 'error', // Disallow unnecessary concatenation of literals
      'no-extra-bind': 'error', // Disallow unnecessary function binding
      'no-useless-return': 'error', // Disallow redundant return statements
      'no-self-compare': 'error', // Disallow comparing to self
      'default-case': 'error', // Require `default` case in `switch` statements
      'no-useless-escape': 'error', // Disallow unnecessary escape characters
      'prefer-spread': 'error', // Prefer the spread operator over `.apply()`
      'prefer-rest-params': 'error', // Prefer rest parameters over arguments
      'no-catch-shadow': 'error', // Disallow the use of the same variable name in a catch block
      'no-label-var': 'error', // Disallow labels that share a name with a variable
      'no-unsafe-finally': 'error', // Disallow control flow statements in `finally` blocks
      'no-unused-expressions': ['error', { allowTernary: true }], // Disallow unused expressions
      strict: ['error', 'global'], // Require strict mode
      'prefer-destructuring': ['error', { array: true, object: true }], // Prefer destructuring over accessing properties
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Prefer function declarations over expressions

      // Prettier configuration integrated into ESLint
      'prettier/prettier': [
        'error', // Treat Prettier issues as ESLint errors
        {
          trailingComma: 'es5', // Use trailing commas where valid in ES5
          singleQuote: true, // Use single quotes instead of double quotes
          printWidth: 100, // Specify the line length that the printer will wrap
          tabWidth: 2, // Specify the number of spaces per indentation level
          semi: true, // Include semicolons at the end of statements
          endOfLine: 'auto', // Automatically determine the line ending
        },
      ],
    },
  },
];
