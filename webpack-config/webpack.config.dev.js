const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	output: {
        publicPath: '/dest/'
    },
	devServer: {
		hot: true,
		host: 'localhost',
		disableHostCheck: true,
		compress: true,
		open: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	watchOptions: {
  		aggregateTimeout: 300,
  		poll: 2000
	}
});