import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {EVENTS, ApiPlugin} from 'api';

Vue.config.productionTip = false;

Vue.use(ApiPlugin, {
	[EVENTS.CL_TEST]: function (a, b, c, d) {
		console.log('HAHAH', a, b, c, d);
	}
});

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
