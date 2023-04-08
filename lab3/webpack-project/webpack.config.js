const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

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
        new CopyPlugin({
            patterns:[{
                from: 'src/assets/images', 
                to: 'images',
                noErrorOnMissing: true,
            }],
        }),
        new HtmlWebpackPlugin({
            title: 'webpack index.html',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/pages/index.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack news.html',
            filename: 'news.html',
            template: path.resolve(__dirname, './src/pages/news.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack photo.html',
            filename: 'photo.html',
            template: path.resolve(__dirname, './src/pages/photo.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'webpack rozklad.html',
            filename: 'rozklad.html',
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
        }),
        
    ],
}