const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    mode: "development",
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    /*performance: {
        hints: false
    },*/
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
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
        	test: /.css$/,
            exclude: /node_modules/,
        	use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
            })
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file-loader'
        }]
    }
}