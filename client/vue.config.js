const webpack = require('webpack');
const shared = require('../shared');

module.exports = {
	'transpileDependencies': [
		'vuetify'
	],
	configureWebpack       : {
		plugins: [
			new webpack.DefinePlugin({
				...Object.keys(shared).reduce((res, current) => {
					res[current] = JSON.stringify(shared[current]);
					return res;
				}, {})
			})
		]
	}
};