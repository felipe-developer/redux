'use strict';

const webpack = require('webpack')

module.exports = {
	entry: './ex_3/index.jsx', // src or ex_1
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	},
	resolve: {
    	extensions: ['*', '.js', '.jsx']
 	},
	module: {
		rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
            }
        }]
	}
}