/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack-common.js");

module.exports = merge(common, {
    module: "production",
    devtool: "source-map",
});