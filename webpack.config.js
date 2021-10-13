const path = require('path');
const miniExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'index.js'
    },
    devServer: {
        port: 3010,
        watchContentBase: true,
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
            { test: /\.css$/, use: [miniExtractPlugin.loader, 'css-loader'] }
        ]
    },
    plugins: [
    new miniExtractPlugin({ filename: 'main.[hash].css' })],
    mode: 'development',
};