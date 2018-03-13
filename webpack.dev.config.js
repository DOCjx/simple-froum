const   path = require('path'),
        webpack = require('webpack')
        HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    resolve: {
        alias: {
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        }]
    },
    devServer: {
        historyApiFallback: true,
        port: 8000,
        inline: true,
    },
    plugins: [
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //用于生成html文件，可定义多个
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html'
        })
    ],
};