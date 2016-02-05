module.exports = {

  context: __dirname +'/app',
  entry: './app.ts',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      },
     {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  
  devServer: {
    contentBase: "./app"
  },
  
  devtool: '#inline-source-map'
};