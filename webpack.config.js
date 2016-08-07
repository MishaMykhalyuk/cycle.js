'use strict';

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				loader: 'babel-loader'
			}
		]
	}
}