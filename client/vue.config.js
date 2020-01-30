const path = require('path');

module.exports = {
	'transpileDependencies': [
		'vuetify'
	],
	configureWebpack       : {
		resolve: {
			alias: {
				api: path.join(__dirname, 'src/plugins/api.js')
			}
		}
	}
};
