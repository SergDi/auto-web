module.exports = {

  context: __dirname +'/app',
  entry: './app.ts',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ]
  },
  devtool: '#inline-source-map'
};