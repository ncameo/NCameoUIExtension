var webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    node: { global: true, fs: 'empty' }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
    //   entry: {
    //     "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
    //   },
    entry: {
        ncameo: "./src/plugin.js"
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/build'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-proposal-class-properties",
                            "css-modules-transform"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.(jpg|png|gif)$/, use: 'file-loader' },
            { test: /\.(woff|woff2|eot|ttf|svg)$/, use: 'file-loader' }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        })
    ],
}