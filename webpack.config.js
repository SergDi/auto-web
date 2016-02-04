module.exports = {

  // set the context (optional)
  context: __dirname + '/src',
  entry: 'app.ts',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [__dirname + "/src"],
    extensions: ['','.webpack.js','.ts', '.js']
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


  // webpack dev server configuration
  devServer: {
    contentBase: "./src"
  },

  // support source maps
  devtool: "#inline-source-map"
};