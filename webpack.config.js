var webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dotenv = require('dotenv-webpack').config({
//     path: path.join(__dirname, '.env')
// })
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.join(__dirname, "src", "plugin.js"),
    output: {
        path: path.join(__dirname, "/public/build"),
        filename: "ncameo.js"
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx|\.ts|\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-proposal-class-properties",
                            "css-modules-transform"
                        ]
                    }
                }
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: path.join(__dirname, '.env')
        }),
        // new webpack.DefinePlugin({
        //     'process.env': JSON.stringify(process.env)
        // }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin(),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 7,
            },
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        })
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};