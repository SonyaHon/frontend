<template lang="pug">
	v-app: v-content: v-container(fluid) {{data}}
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				data: ''
			};
		},
		async mounted() {
			this.data = await this.api.emit(EVENTS.MESSAGE);
		}
	};
</script>
