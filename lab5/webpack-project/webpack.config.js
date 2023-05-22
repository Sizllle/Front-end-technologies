const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
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
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyPlugin({
            patterns:[
                {
                from: 'src/assets/images', 
                to: 'assets/images',
                }
            ]
        }),
    ],
    devServer:  {
        static: {
            directory: './dist',
        },
        open: true,
    },
}