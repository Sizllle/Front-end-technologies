const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack index.html',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/pages/index.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack about.html',
            filename: 'about.html',
            template: path.resolve(__dirname, './src/pages/about.html'),
        }),
    ],
}