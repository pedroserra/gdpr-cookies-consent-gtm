const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const ENV = (process.env.NODE_ENV || 'DEVELOPMENT').toUpperCase();

module.exports = {
    target: 'web',
    mode: ENV.toLowerCase(),
    entry: {
        'gdpr-cookies-consent-gtm': './src/main.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: []
};


// Minify code for production env ----------------------------------------------
if (ENV == 'PRODUCTION') {
    module
        .exports
        .plugins
        .push(new ClosureCompilerPlugin({
            compiler: {
                language_in: 'ECMASCRIPT6',
                language_out: 'ECMASCRIPT3',
                compilation_level: 'SIMPLE',
                create_source_map: true
            },
            concurrency: 3
        }));
}
