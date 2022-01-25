/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: ["./src/Index.tsx"],
    devServer: {
        contentBase: "./dist",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
        hot: true,
        watchOptions: {
            ignored: ["**/*.test.ts", "**/*.test.tsx", "**/node_modules"],
        },
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                dependency: { not: ["url"] },
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
                type: "javascript/auto",
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, "webpack_template_index.html"),
            filename: path.resolve("dist", "index.html"),
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            fs: false,
        },
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js?cacheBust=[fullhash]",
        chunkFilename: '[name].js?cacheBust=[chunkhash]'
    },
};