const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
	entry: './src/server/index.js',
	output: {
		path: path.resolve(__dirname, '../public/'),
		publicPath: '../public/',
		filename: 'ssr.bundle.js',
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'ignore-loader'
			}
		]
	},
	externals: [nodeExternals()],
	plugins: [
		new webpack.ProvidePlugin({
			"fetch": "isomorphic-fetch"
		})
	],
};