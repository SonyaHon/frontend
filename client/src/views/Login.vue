<template lang="pug">
	v-layout(column fill-height align-center justify-center)
		v-card
			v-card-title(large)
				.svjs-logo.elevation-4: img(src="@/assets/logo.svg")
			v-card-text: v-layout.mt-5(column)
				v-text-field(label="Login")
				v-text-field(label="Password")
			v-card-actions
				v-spacer
				v-btn(text) Log In
				v-spacer

</template>

<script>
	export default {
		name: 'Login'
	};
</script>

<style lang="scss" scoped>
	.v-card {
		width : 400px;
	}

	.v-card-title {
		position : relative;
	}

	.svjs-logo {
		width            : 80px;
		height           : 80px;
		position         : absolute;
		border-radius    : 50%;
		display          : flex;
		justify-content  : center;
		align-items      : center;
		background-color : #333333;
		top              : -30px;
		left             : calc(50% - 40px);

		img {
			width    : 80%;
			height   : 80%;
			position : absolute;
			bottom   : 4px;
		}
	}

	@media screen and(max-width : 600px) {
		.v-card {
			width : 100%;
		}
	}
</style>