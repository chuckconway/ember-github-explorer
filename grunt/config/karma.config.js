
module.exports = function ( karma ) {
    karma.configure({
        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath: '../../',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: filePatterns(),
        exclude: ['src/assets/**/*.js'],
        frameworks: [ 'jasmine' ],
        plugins: [ 'karma-jasmine', 'karma-firefox-launcher' ],

        /**
         * How to report, by default.
         */
        reporters: 'dots',

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9876,
        runnerPort: 9100,
        urlRoot: '/',
        autoWatch: false,

        browsers: ['Chrome']
  });

    function filePatterns(){
        var _ = require('lodash');
        var config = require('./build.config.js');

        var jsFiles = _.union(config.dependencies.js, config.tests.js,['src/**/*.js']);
        return jsFiles;
    }

};

//module.exports = function(config){};