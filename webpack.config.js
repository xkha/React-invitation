var path = require('path');
var webpack = require('webpack');
var config = require('./src/libs/config');

module.exports = {
  devtool: "#inline-source-map",
  entry: [
    'webpack-dev-server/client?http://localhost:' + config.get('server-port'),
    'webpack/hot/only-dev-server',
    './src/app/app'
  ],
  debug: false,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/src/'
  },
  plugins: [
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.join(__dirname, "bower_components")],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?compact=true'],
      include: path.join(__dirname, 'src')
    }]
  }
};