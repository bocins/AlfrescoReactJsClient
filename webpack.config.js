const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}