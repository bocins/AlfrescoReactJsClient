const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],

    devServer:{
        contentBase: './public',
        hot: true,
        inline: true,
        port: 5000,
        host: 'localhost',

        proxy:
            {
                "/api": {
                    target: "http://localhost:8080/alfresco/api",
                    changeOrigin: true,
                    pathRewrite: {
                        "^/api": ""
                    }
                }
            }
    },
    devtool: 'eval-cheap-module-source-map',
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
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }
        ]
    }
};

