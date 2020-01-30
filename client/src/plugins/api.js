import io from 'socket.io-client';

const socket = io();

const api = {
	async emit(eventName, payload = null) {
		return new Promise(resolve => {
			socket.emit(eventName, payload, (data) => {
				resolve(data);
			});
		});
	}
};

export default (Vue) => {
	Vue.prototype.api = api;
}