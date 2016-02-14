module.exports = {

    context: __dirname + '/app',
    entry: './app.ts',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts-loader'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url'}
        ]
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    devServer: {
        contentBase: "./app",
        historyApiFallback: true,

        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000
        }
    },

    devtool: '#inline-source-map'
};