<template lang="pug">
	v-app: v-content: v-container(fluid) {{data}}
</template>

<script>
	import {EVENTS} from 'api';

	export default {
		name: 'App',
		data() {
			return {
				data: ''
			};
		},
		async mounted() {
			this.data = await this.api.emit(EVENTS.MESSAGE, {
				id: 22
			});
		}
	};
</script>
