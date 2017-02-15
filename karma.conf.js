const karma = require('karma');

module.exports = function(config) {
    config.set({
        singleRun: true,
        autoWatch: false,
        autoWatchInterval: 0,

        logLevel: 'warn',
        reporters: 'dots',
        colors: true,

        port: 8001,
        basePath: '.',
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],

        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-chrome-launcher')
        ],

        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './dist/angular-beanie.js',
            './test/*.spec.js'
        ]
    });
};
