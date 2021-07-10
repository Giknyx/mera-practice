const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },

  plugins: [
	 new HtmlWebpackPlugin({template: 'index.html', filename: 'index.html'}),
	 new ESLintPlugin()
	]
};
