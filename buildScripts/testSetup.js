// this file isn't transpiled, so must use CommonJS and ES5

// register babel to transpiles before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
