import Vue from 'vue';

const dataService = new Vue({
	data() {
		return {
			user: {
				loggedIn: false,
			}
		};
	}
});

export default (Vue1 => {
	Vue1.prototype.dataService = dataService;
});