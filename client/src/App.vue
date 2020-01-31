<template lang="pug">
	v-app
		v-content: v-container(fill-height fluid)
			router-view
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style lang="scss">
	html, body {
		width    : 100vw;
		height   : 100vh;
		overflow : auto !important;
	}
</style>