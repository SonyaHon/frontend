<template lang="pug">
	v-app(dark): v-content: v-container() {{data}}
</template>

<script>
	import {EVENTS} from '@/plugins/api';

	export default {
		name: 'App',
		data() {
			return {
				data: ''
			};
		},
		async mounted() {
			this.data = this.api.emit(EVENTS.MESSAGE);
		}
	};
</script>

<style lang="scss">
	html, body {
		width    : 100vw;
		height   : 100vh;
		overflow : auto !important;
	}
</style>