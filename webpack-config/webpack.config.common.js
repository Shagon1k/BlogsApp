const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
	entry: ["react-hot-loader/patch", "./src/client/js"],
	output: {
		path: path.resolve(__dirname, '../public/'),
		publicPath: '../public/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	]
 }