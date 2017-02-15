const karma = require('karma');

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';

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
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-phantomjs-launcher')
        ],

        files: ['./test/*.spec.js'],

        webpack: webpackConfig
    });
};
