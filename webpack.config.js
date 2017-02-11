var webpack = require("webpack");
var node_dir = __dirname + '/node_modules';
module.exports = {
   entry: [
      'jquery',
      `${__dirname}/source/js/main.js`,
   ],
   output: {
      path: `${__dirname}/dist/js`,
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            query: {
               presets: ['es2015']
            }
         },
         { test: /\.json$/, loader: "json-loader" }
      ]
   },
   resolve: {
      alias: {
         'jquery': node_dir + '/jquery/dist/jquery.js',
      }
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jquery: "jQuery",
         "windows.jQuery": "jquery"
      })
   ],
};
