<template>
	<div class="recovery-bg">
		<div class="recovery-border-container">
			<div class="recovery-border">
				<img src="@/assets/images/log-balls.png" class="balls" />
				<img src="@/assets/images/log-ball.png" class="ball" />
				<div class="recovery">
					<div class="recovery-container">
						<img
							src="@/assets/images/logo.webp"
							class="recovery__logo" />
						<h1 class="recovery__title">New Password</h1>
						<form action="" class="recovery__form">
							<div class="password-container">
								<input
									class="form__password"
									:type="
										isPasswordVisible ? 'text' : 'password'
									"
									v-model="passwordState"
									placeholder="Create password" />
								<i
									:class="
										isPasswordVisible
											? 'icon-show'
											: 'icon-hide'
									"
									@click="handlePasswordClick"></i>
							</div>
							<div class="password-container">
								<input
									class="form__password"
									:type="
										isPasswordRepeatedVisible
											? 'text'
											: 'password'
									"
									v-model="passwordRepeatedState"
									placeholder="Repeat password" />
								<i
									:class="
										isPasswordRepeatedVisible
											? 'icon-show'
											: 'icon-hide'
									"
									@click="handlePasswordRepeatedClick"></i>
							</div>
						</form>
						<div class="restore-button">
							<ButtonLarge text="Restore" />
						</div>
						<div class="login-button">
							<router-link to="login">
								<ButtonLarge
									text="Login"
									type="secondary" />
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import ButtonLarge from "@/components/layout/buttons/ButtonLarge.vue";
	const passwordState = ref("");
	const passwordRepeatedState = ref("");
	const isPasswordVisible = ref(false);
	const isPasswordRepeatedVisible = ref(false);
	const handlePasswordClick = () => {
		isPasswordVisible.value = !isPasswordVisible.value;
	};
	const handlePasswordRepeatedClick = () => {
		isPasswordRepeatedVisible.value = !isPasswordRepeatedVisible.value;
	};
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	body {
		background: rgb(23, 23, 23);
	}
	.recovery-bg {
		position: relative;
		z-index: 1;
		overflow: scroll;
		padding: 187px 8px 66px;
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
	.recovery-border {
		position: relative;
		margin: 0 auto;
		padding: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 361px;
		height: 100%;
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
		top: -122px;
		left: calc(50% - 6px);
		transform: translateX(-50%);
		min-width: 352px;
	}
	.ball {
		position: absolute;
		z-index: 11;
		top: -110px;
		left: calc(50% + 108px);
		transform: translateX(-50%);
	}
	.recovery-border-container {
		height: 100%;
		max-width: 361px;
		margin: 0 auto;
		position: relative;
		z-index: 10;
	}
	.recovery-border-balls {
		position: absolute;
		z-index: -1;
		top: -120px;
		left: 50%;
		transform: translateX(-50%);
		min-width: 336px;
		height: 145px;
	}
	.recovery-border-ball {
		position: absolute;
		z-index: 11;
		top: -120px;
		left: 46%;
		transform: translateX(-50%);
		min-width: 336px;
		height: 145px;
	}
	.recovery {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		overflow: scroll;
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
	.recovery-container {
		padding: 24px 17px 30px;
		height: 100%;
	}
	.recovery__logo {
		width: 117px;
		height: 17px;
	}
	.recovery__title {
		letter-spacing: -1px;
		margin-top: 57px;
		color: white;
		font: normal 600 40px/120% "Noto Sans", sans-serif;
	}
	.recovery__form {
		margin: 16px auto 0;
		font: $h5-regular;
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
	input:focus {
		outline: none;
	}
	.restore-button {
		margin-top: 12px;
	}
	.login-button {
        margin-top: 165px;
	}
</style>
