'use strict'

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'app.css'
		})
	],
	module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
        	test: /\.css$/,
        	exclude: /node_modules/,
        	use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
        }]
    }
}