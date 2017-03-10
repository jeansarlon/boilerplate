const webpack        = require("webpack"),
   node_dir          = __dirname + '/node_modules',
   autoprefixer      = require('autoprefixer'),
   ExtractTextPlugin = require('extract-text-webpack-plugin'),
   path              = require('path');

module.exports = {
   entry: [
      'jquery', `${__dirname}/source/js/main.js`
   ],
   devtool: 'source-map',
   devServer: {
      contentBase: __dirname + '/public'
   },
   output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js'
   },
   watch: true,
   module: {
      loaders: [
         {
            test: [
               /\.js$/, /\.es6$/
            ],
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
               presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
            }
         }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
         }, {
            test: /\.json$/,
            loader: "json-loader"
         }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?name=./fonts/[name].[ext]&limit=10000&mimetype=application/font-woff"
         }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=./fonts/[name].[ext]"
         }
      ]
   },
   resolve: {
      alias: {
         'jquery': node_dir + '/jquery/dist/jquery.js'
      }
   },
   plugins: [
      new webpack.ProvidePlugin({$: "jquery", jquery: "jQuery", "windows.jQuery": "jquery"}),
      new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
      // new ExtractTextPlugin({filename: '[name].bundle.css', allChunks: true})
   ]
};
