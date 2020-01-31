<template lang="pug">
	.svjs-logo.elevation-5: img(src="@/assets/logo.svg")
</template>

<script>
	export default {
		name: 'SvjsLogo'
	};
</script>

<style lang="scss" scoped>
	.svjs-logo {
		width            : 80px;
		height           : 80px;
		background-color : #454545;
		border-radius    : 50%;
		display          : flex;
		justify-content  : center;
		align-items      : center;

		img {
			width  : 80%;
			height : 80%;
		}
	}

</style>
