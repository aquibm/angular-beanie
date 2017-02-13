const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'angular-beanie.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'angular-beanie'
    },
    externals: {
        angular: 'angular'
    }
};