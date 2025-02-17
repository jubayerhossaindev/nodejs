// Importing ESLint Parser and Configuration
import eslintParser from '@babel/eslint-parser'; // Babel parser to support modern JavaScript syntax
import eslintConfigAirbnbBase from 'eslint-config-airbnb-base'; // Airbnb's base ESLint configuration for JavaScript
import eslintConfigPrettier from 'eslint-config-prettier'; // Prettier configuration to disable conflicting ESLint rules

// Importing ESLint Core Packages
import eslintJs from '@eslint/js'; // ESLint core configuration for JavaScript

// Importing ESLint Plugins for Best Practices
import eslintPluginImport from 'eslint-plugin-import'; // Plugin for ES6+ import/export syntax
import eslintPluginN from 'eslint-plugin-n'; // Plugin for Node.js specific linting rules
import eslintPluginNode from 'eslint-plugin-node'; // Plugin for Node.js specific linting rules
// import eslintPluginOxlint from 'eslint-plugin-oxlint'; // Custom linting rules to enhance code quality
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Plugin to integrate Prettier formatting with ESLint
import eslintPluginPromise from 'eslint-plugin-promise'; // Plugin to enforce best practices with Promises
import eslintPluginSecurity from 'eslint-plugin-security'; // Plugin to identify security issues in JavaScript
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'; // Plugin to detect bugs and vulnerabilities
import eslintPluginUnicorn from 'eslint-plugin-unicorn'; // Plugin with useful ESLint rules for clean code

// Importing Globals package to define global variables
import globals from 'globals'; // Package that defines standard global variables for different environments

export default [
  // Custom linting configuration using Oxlint plugin
  // eslintPluginOxlint.configs['flat/recommended'], // Apply Oxlint's recommended configuration for a flat structure

  {
    files: ['**/*.js', '**/*.mjs'], // Target all JavaScript files in the project
    ignores: ['node_modules', 'dist', 'coverage'], // Ignore common directories like node_modules, dist, and coverage

    // Language options to specify the environment and parser
    languageOptions: {
      ecmaVersion: 'latest', // Set ECMAScript version to the latest available
      sourceType: 'module', // Enable support for ES module imports
      parser: eslintParser, // Use Babel parser to support modern JavaScript syntax
      parserOptions: {
        requireConfigFile: false, // Disable requirement for separate Babel configuration file
        babelOptions: {
          babelrc: false, // Disable use of .babelrc files
          configFile: false, // Disable use of other Babel config files
          presets: ['@babel/preset-env'], // Use the preset-env for Babel compilation
        },
      },

      // Define global variables for various environments
      globals: {
        ...globals.browser, // Add global variables for the browser environment
        ...globals.node, // Add global variables for Node.js environment
        ...globals.es2021, // Add global variables for ECMAScript 2021 environment
        // You can add more global variables here as needed
      },
    },

    // ESLint plugins to enforce various coding standards
    plugins: {
      prettier: eslintPluginPrettier, // Integrate Prettier formatting with ESLint
      import: eslintPluginImport, // Ensure proper use of ES6+ imports
      node: eslintPluginNode, // Node.js specific linting rules
      n: eslintPluginN, // Node.js linting rules
      security: eslintPluginSecurity, // Security best practices
      promise: eslintPluginPromise, // Enforce best practices for promises
      unicorn: eslintPluginUnicorn, // Additional rules to enforce cleaner, more efficient code
      sonarjs: eslintPluginSonarjs, // SonarJS rules for detecting bugs and vulnerabilities
    },

    // ESLint rules to enforce coding standards
    rules: {
      // Base rules from ESLint's recommended configuration
      ...eslintJs.configs.recommended.rules, // Spread the ESLint recommended base rules

      // Prettier rules to handle formatting preferences
      ...eslintConfigPrettier.rules, // Apply Prettier's recommended rules to avoid conflicts

      // Airbnb base configuration rules for consistent style
      ...eslintConfigAirbnbBase.rules, // Spread the rules from the Airbnb JavaScript style guide

      // Stylistic issues (e.g., formatting)
      // indent: ['error', 2], // Enforce 2-space indentation for consistency
      quotes: ['error', 'single'], // Enforce the use of single quotes for strings
      semi: ['error', 'always'], // Enforce semicolons at the end of statements
      // 'max-len': ['error', { code: 100 }], // Limit the line length to 100 characters for readability

      // Best practices for cleaner and more consistent code
      eqeqeq: ['error', 'always'], // Enforce the use of strict equality (=== and !==) instead of == and !=
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // Warn on unused variables
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // Limit consecutive empty lines in code
      'prefer-const': 'error', // Enforce the use of const for variables that are never reassigned
      'no-var': 'error', // Disallow the use of var, enforcing let and const
      'consistent-return': 'error', // Require consistent return behavior in functions

      // Node.js specific rules
      'node/no-unsupported-features/es-syntax': 'off', // Allow ES6 features like arrow functions and async/await
      'node/no-missing-import': 'error', // Prevent importing modules that don't exist
      'node/no-extraneous-import': 'error', // Prevent importing modules not listed in package.json
      'node/callback-return': 'warn', // Enforce callback return in asynchronous functions

      // Promise best practices
      'promise/catch-or-return': 'error', // Enforce handling of promise rejections
      'promise/no-nesting': 'warn', // Warn against nesting promises unnecessarily

      // Security best practices
      'security/detect-non-literal-fs-filename': 'warn', // Prevent non-literal filenames in fs methods
      'security/detect-eval-with-expression': 'warn', // Prevent the use of eval with dynamic expressions
      'security/detect-child-process': 'warn', // Disallow the use of child process methods that could be a security risk

      // Unicorn best practices (useful utility rules)
      'unicorn/prefer-array-flat': 'error', // Enforce the use of Array.flat() over Array.reduce() for flattening arrays
      'unicorn/prefer-add-event-listener': 'warn', // Recommend using addEventListener over inline event handlers

      // SonarJS rules to improve code quality and maintainability
      'sonarjs/no-duplicate-string': 'warn', // Warn on duplicate strings in the code
      'sonarjs/no-collapsible-if': 'warn', // Warn when if statements can be collapsed
      'sonarjs/no-ignored-return': 'warn', // Warn when return values are ignored
      'sonarjs/no-same-line-conditional': 'warn', // Avoid having multiple conditions in the same line

      // Additional quality control rules
      'no-empty-function': 'warn', // Warn on empty function definitions
      'no-implicit-globals': 'error', // Disallow the use of global variables in the code
      'no-magic-numbers': ['warn', { ignore: [0, 1] }], // Disallow magic numbers (hardcoded numeric values)
      'consistent-this': ['error', 'self'], // Enforce a consistent naming convention for `this` (e.g., `self`)
      'callback-return': ['error', ['callback', 'next']], // Enforce the use of return statements in callback functions
      'global-require': 'error', // Enforce require calls to be at the top level of the module
      'no-path-concat': 'error', // Disallow string concatenation with `__dirname` or `__filename`
      'require-await': 'error', // Disallow async functions without await expressions
      'class-methods-use-this': 'error', // Enforce the use of `this` inside class methods

      // Miscellaneous best practices
      'prefer-arrow-callback': 'error', // Enforce the use of arrow functions for callbacks
      'no-new': 'error', // Disallow the use of `new` without assigning it to a variable
      'no-throw-literal': 'error', // Disallow throwing literals as exceptions
      'no-useless-concat': 'error', // Disallow unnecessary string concatenation
      'no-extra-bind': 'error', // Disallow unnecessary function bindings
      'no-useless-return': 'error', // Disallow redundant return statements
      'no-self-compare': 'error', // Disallow comparing a value to itself
      'default-case': 'error', // Enforce a `default` case in `switch` statements
      'no-useless-escape': 'error', // Disallow unnecessary escape characters
      'prefer-spread': 'error', // Enforce the use of the spread operator over `.apply()`
      'prefer-rest-params': 'error', // Enforce the use of rest parameters over `arguments`
      'no-catch-shadow': 'error', // Disallow the use of the same variable name in catch blocks
      'no-label-var': 'error', // Disallow labels that share a name with a variable
      'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
      'no-unused-expressions': ['error', { allowTernary: true }], // Disallow unused expressions except ternary operators
      strict: ['error', 'global'], // Enforce strict mode at the global level
      'prefer-destructuring': ['error', { array: true, object: true }], // Prefer destructuring over accessing properties directly
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Enforce function declarations over expressions

      // Prettier configuration integrated into ESLint
      'prettier/prettier': [
        'error', // Treat Prettier formatting issues as ESLint errors
        {
          trailingComma: 'es5', // Use trailing commas where valid in ES5
          singleQuote: true, // Enforce single quotes for strings
          printWidth: 100, // Wrap lines that exceed 100 characters
          tabWidth: 2, // Set indentation to 2 spaces
          semi: true, // Include semicolons at the end of statements
          endOfLine: 'auto', // Automatically determine line endings
        },
      ],
      // ====================================================
      // Optional Plugin Rules (Unicorn)
      // ====================================================
      'unicorn/better-regex': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/consistent-existence-index-check': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            snakeCase: true,
            kebabCase: true,
          },
        },
      ],
      'unicorn/import-style': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-anonymous-default-export': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-array-reduce': 'error',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-document-cookie': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-invalid-fetch-options': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-keyword-prefix': 'error',
      'unicorn/no-length-as-slice-end': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-magic-array-flat-depth': 'error',
      'unicorn/no-negated-condition': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-null': 'error',
      'unicorn/no-object-as-default-parameter': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-single-promise-in-promise-methods': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-thenable': 'error',
      'unicorn/no-this-assignment': 'error',
      'unicorn/no-typeof-undefined': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unnecessary-polyfills': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-promise-resolve-reject': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-switch-case': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/numeric-separators-style': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-code-point': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-default-parameters': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-event-target': 'error',
      'unicorn/prefer-export-from': 'error',
      'unicorn/prefer-global-this': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-json-parse-buffer': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/prefer-math-min-max': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-native-coercion-functions': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-set-size': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-raw': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-structured-clone': 'error',
      'unicorn/prefer-switch': 'error',
      'unicorn/prefer-ternary': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/prevent-abbreviations': 'error',
      'unicorn/relative-url-style': 'error',
      'unicorn/require-array-join-separator': 'error',
      'unicorn/require-number-to-fixed-digits-argument': 'error',
      'unicorn/require-post-message-target-origin': 'error',
      'unicorn/string-content': 'error',
      'unicorn/switch-case-braces': 'error',
      'unicorn/template-indent': 'error',
      'unicorn/text-encoding-identifier-case': 'error',
      'unicorn/throw-new-error': 'error',

      // ====================================================
      // Miscellaneous Best Practices
      // ====================================================
      'import/no-extraneous-dependencies': 'off',
    },

    // -------------------------------
    // ESLint Settings & Linter Options
    // -------------------------------
    settings: {
      // ------------------ Node.js Specific Settings -------------------
      node: {
        allowModules: ['fs', 'path'], // Allow specific Node.js core modules in your project
        resolvePaths: ['node_modules'], // Set paths where Node.js modules should be resolved
        tryExtensions: ['.js', '.json', '.node'], // Try these extensions when resolving modules
      },

      // ------------------ JSON Settings -------------------
      json: {
        allowComments: false, // Disallow comments in JSON files
        strict: true, // Enforce strict rules for JSON files (e.g., no trailing commas)
      },
    },

    linterOptions: {
      noInlineConfig: false, // Allow inline ESLint configuration comments
      reportUnusedDisableDirectives: 'warn', // Warn if disable directives are unused
    },
  },
];
