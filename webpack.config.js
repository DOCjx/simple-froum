module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
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
    }
}