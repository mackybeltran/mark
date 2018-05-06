/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(jsx?)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.(jpg|jpeg|gif|png|svg)$/, use: 'file-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        })
    ],
    // serve index.html in place of browser's 404 responses
    devServer: {
        inline: true,
        historyApiFallback: true
    }
};
