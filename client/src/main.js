import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import DataService from './plugins/data-service';
import {EVENTS, ApiPlugin, api} from 'api';

Vue.config.productionTip = false;

Vue.use(DataService);
Vue.use(ApiPlugin, {});

document.body.style.backgroundColor = '#121212';

async function start() {

	const isLoggedIn = await api.emit(EVENTS.AUTH_GET);
	console.log('Auth:', isLoggedIn);

	new Vue({
		router,
		vuetify,
		render: h => h(App)
	}).$mount('#app');
}

start();
