<template>
	<div class="login-bg">
		<div class="login-border">
			<img src="@/assets/images/log-balls.png" class="balls">
			<img src="@/assets/images/log-ball.png" class="ball">
			<div class="login">
				<div class="login-container">
					<img src="@/assets/images/logo.webp" class="login__logo" />
					<h1 class="login__title">Welcome!</h1>
					<form action="" class="login__form">
						<input
							class="form__name"
							type="text"
							v-model="nameState"
							placeholder="Phone number or email" />
						<div class="error" v-if="error">
							<div class="error-message">
								<Tooltip message="User already exists" />
							</div>
						</div>
						<div class="password-container">
							<input
								class="form__password"
								:type="isFieldVisible ? 'text' : 'password'"
								v-model="passwordState"
								placeholder="Password" />
							<i
								:class="
									isFieldVisible ? 'icon-show' : 'icon-hide'
								"
								@click="handleClick"></i>
						</div>
					</form>
					<div class="forgot">
						<router-link to="" class="forgot__link">
							<span>Forgot your password?</span>
						</router-link>
					</div>

					<div class="buttons-container">
						<ButtonLarge text="Login" />
						<router-link to="register">
							<ButtonLarge text="Registration" type="secondary" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";
	import ButtonLarge from "@/components/layout/buttons/ButtonLarge.vue";
	import Tooltip from "@/components/layout/tooltips/Tooltip.vue";
	const nameState = ref("");
	const passwordState = ref("");
	const isFieldVisible = ref(false);
	const handleClick = () => {
		isFieldVisible.value = !isFieldVisible.value;
		console.log(isFieldVisible.value);
	};
	const wrongValue = "admin";
	const error = computed(() => {
		return nameState.value === wrongValue;
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	:global(body) {
		background: rgb(23, 23, 23);
	}
	.error {
		position: relative;
		padding-right: 5px;
	}
	.error-message {
		position: absolute;
		top: -6.5px;
	}
	.login-bg {
		position: relative;
		z-index: 1;
		overflow: scroll;
		padding: 183px 8px 70px;
		width: 100vw;
		overflow: hidden;
		height: 100%;
		background: radial-gradient(
			76.09% 34.16% at 51.6% 0%,
			rgb(253, 196, 112) 0%,
			rgb(138, 104, 54) 35.5953186750412%,
			rgb(23, 23, 23) 72.98812866210938%
		);
	}
	.login-border {
		position: relative;
		margin: 0 auto;
		padding: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 361px;
		height: 100%;
		min-height: 558px;
		border-radius: 12px;
		background: linear-gradient(
			180deg,
			rgba(255, 195, 80, 1) 27%,
			rgba(0, 0, 0, 1) 65%
		);
	}
	.balls {
		position: absolute;
		z-index: -1;
		top: -120px;
		left: calc(50% - 6px);
		transform: translateX(-50%);
		min-width: 352px;
	}
	.ball {
		position: absolute;
		z-index: 11;
		top: -108px;
		left: calc(50% + 108px);
		transform: translateX(-50%);
	}
	.login {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: linear-gradient(
			180deg,
			#393a3e 5.86%,
			#080e13 25.37%,
			#1f1f21 99.26%
		);
		box-shadow: 0 12px 16px 0 $secondary-button-bg,
			inset 0 -2px 4px 0 rgba(0, 0, 0, 0.42),
			0 -4px 6px 0 rgba(255, 186, 51, 0.31),
			inset 0 4px 4px 0 rgba(255, 255, 255, 0.25);
	}
	.login-container {
		padding: 24px 17px 24px 17px;
		height: 100%;
	}
	.login__logo {
		width: 117px;
		height: 17px;
	}
	.login__title {
		margin-top: 61px;
		color: white;
		font: normal 600 40px/120% "Noto Sans", sans-serif;
	}
	.login__form {
		margin: 16px auto 0;
		font: $h5-regular;
	}
	.form__name {
		padding: 14.5px 8px;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		color: $gray-text;
		border-radius: 4px;
	}
	input:focus {
		outline: none;
	}
	.password-container {
		position: relative;
	}
	.form__password {
		padding: 14.5px 8px;
		margin-top: 12px;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		color: $gray-text;
		border-radius: 4px;
	}
	.icon-show {
		position: relative;
	}
	.icon-hide {
		position: relative;
	}
	.icon-hide::before {
		position: absolute;
		content: "";
		top: 50%;
		transform: translateY(-50%);
		right: 13px;
		width: 20px;
		height: 20px;
		background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2243_345)"><path d="M8.25016 3.53352C8.82377 3.39925 9.41105 3.33213 10.0002 3.33352C15.8335 3.33352 19.1668 10.0002 19.1668 10.0002C18.661 10.9465 18.0577 11.8375 17.3668 12.6585M11.7668 11.7669C11.538 12.0125 11.262 12.2095 10.9553 12.3461C10.6486 12.4828 10.3176 12.5562 9.9819 12.5622C9.64623 12.5681 9.3128 12.5063 9.0015 12.3806C8.69021 12.2549 8.40743 12.0677 8.17003 11.8303C7.93264 11.5929 7.74549 11.3101 7.61975 10.9988C7.49402 10.6875 7.43227 10.3541 7.43819 10.0184C7.44411 9.68277 7.51759 9.35172 7.65423 9.04506C7.79087 8.73839 7.98787 8.46239 8.2335 8.23352M14.9502 14.9502C13.5257 16.036 11.7911 16.6376 10.0002 16.6669C4.16683 16.6669 0.833496 10.0002 0.833496 10.0002C1.87007 8.06843 3.30778 6.38069 5.05016 5.05018L14.9502 14.9502Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M0.833496 0.833496L19.1668 19.1668" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_2243_345"><rect width="20" height="20" fill="white" /></clipPath></defs></svg>');
	}
	.icon-show::before {
		position: absolute;
		content: "";
		top: 50%;
		transform: translateY(-50%);
		right: 13px;
		width: 20px;
		height: 16px;
		background: url('data:image/svg+xml,<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.833008 8.00016C0.833008 8.00016 4.16634 1.3335 9.99967 1.3335C15.833 1.3335 19.1663 8.00016 19.1663 8.00016C19.1663 8.00016 15.833 14.6668 9.99967 14.6668C4.16634 14.6668 0.833008 8.00016 0.833008 8.00016Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>');
	}
	.forgot {
		margin-top: 8px;
		display: flex;
		justify-content: end;
	}
	.forgot__link {
		color: $gold-accent;
		font: $h5-regular;
	}
	.buttons-container {
		height: 216px;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
