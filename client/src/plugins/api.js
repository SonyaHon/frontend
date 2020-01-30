import io from 'socket.io-client';
import {EVENTS} from '../../../shared';

const socket = io();

const api = {
	async emit(eventName, payload = null) {
		return new Promise(resolve => {
			socket.emit(eventName, payload, (data) => {
				resolve(data);
			});
		});
	},
	on(eventName, handler) {
		socket.on(eventName, handler);
	}
};

window.api = api;

const ApiPlugin = (Vue, settings) => {
	Vue.prototype.api = api;
	if (settings) {
		Object.keys(settings).forEach((key) => {
			api.on(key, settings[key]);
		});
	}
};

export {
	ApiPlugin,
	EVENTS
};
