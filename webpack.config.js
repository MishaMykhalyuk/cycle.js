'use strict';

module.exports = {
	entry: './index.js',
	output: {
		filename: 'dist/bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel?presets[]=es2015'
			}
		]
	}
}