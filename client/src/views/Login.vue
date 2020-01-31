<template lang="pug">
	v-layout(column fill-height align-center justify-center)
		v-card
			v-card-title(large): svjs-logo
			v-card-text: v-layout.mt-5(column)
				v-text-field(label="Login")
				v-text-field(label="Password")
			v-card-actions
				v-spacer
				v-btn(text) Log In
				v-spacer

</template>

<script>
	import SvjsLogo from '@/components/SvjsLogo';

	export default {
		name      : 'Login',
		components: {SvjsLogo}

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
		position : absolute;
		top      : -30px;
		left     : calc(50% - 40px);
	}

	@media screen and(max-width : 600px) {
		.v-card {
			width : 100%;
		}
	}
</style>
