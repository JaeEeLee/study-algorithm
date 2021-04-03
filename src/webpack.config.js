const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts']
	},
	entry: {
		app: './client'
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader'
		}]
	},
	plugins: [
	],
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		port: 8080,
		publicPath: '/dist/',
		hot: true
	}
}