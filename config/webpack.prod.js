const {merge} = require("webpack-merge")
const path = require("path")
const commonConfig = require("./webpack.common")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = "http://localhost:8080"

const devConfig = {
    mode: "development",

    entry: "./src/index.ts",
    devtool: false,
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "index.js",
        library: "xotomicro-front-design-registry",
        libraryTarget: "umd",
    },

    devServer: {
        port: process.env.SERVICE_PORT,
        historyApiFallback: {
            index: "index.html",
        },
    },

    plugins: [],
}

module.exports = merge(commonConfig, devConfig)
