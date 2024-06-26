<script setup>
	import { ref } from "vue";
	import ButtonLarge from "@/components/layout/buttons/ButtonLarge.vue";
	import Select from "@/components/layout/inputs/Select.vue";

	const nameState = ref("");
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
	const isChecked = ref(false);
	const currency = ref("");
	const currencyList = ref(["EUR", "RUB", "USD"]);
</script>
<template>
	<div class="registration-bg">
		<div class="registration-border">
			<img src="@/assets/images/reg-balls.png" class="balls" />
			<img src="@/assets/images/reg-ball.png" class="ball" />
			<div class="registration">
				<div class="registration-container">
					<img
						src="@/assets/images/logo.webp"
						class="registration__logo" />
					<h1 class="registration__title">Registration</h1>
					<form action="" class="registration__form">
						<input
							class="form__name"
							type="text"
							v-model="nameState"
							placeholder="Phone number or email" />
						<div class="password-container">
							<input
								class="form__password"
								:type="isPasswordVisible ? 'text' : 'password'"
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
						<div class="currency-select">
							<Select
								placeholder="Select currency"
								:items="currencyList"
								:modelValue="currency"
								@update:modelValue="currency = $event" />
						</div>
					</form>
					<div class="reminder">
						After registration, you cannot change currency in your
						profile
					</div>
					<div class="confirm">
						<input
							class="confirm__check"
							type="checkbox"
							id="checkbox"
							v-model="isChecked" />
						<svg
							v-if="isChecked"
							class="checkbox-svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect
								x="0.5"
								y="0.5"
								width="17"
								height="17"
								rx="1.5"
								fill="#23252B"
								stroke="#313440" />
							<path
								d="M13.5 5.75L6.625 12.625L3.5 9.5"
								stroke="#F5AD22"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>

						<svg
							v-else
							class="checkbox-svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect
								x="0.5"
								y="0.5"
								width="17"
								height="17"
								rx="1.5"
								fill="#23252B"
								stroke="#313440" />
						</svg>

						<div class="confirm__text">
							<label class="confirm__label" for="checkbox">
								<p>
									I hereby confirm that I am over 18 years of
									age and have read and agree to all
									applicance
									<a href="" class="confirm__link"
										>rules and regulations</a
									>
								</p>
							</label>
						</div>
					</div>
					<div class="buttons-container">
						<ButtonLarge
							text="Registration"
							:type="
								isChecked ? 'primary' : 'primary-disabled'
							" />
						<router-link to="login">
							<ButtonLarge text="Login" type="secondary" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "@/styles/global";
	:global(body) {
		background: rgb(23, 23, 23);
	}
	.registration-bg {
		position: relative;
		z-index: 1;
		overflow: scroll;
		padding: 86px 8px 70px;
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
	.registration-border {
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
		max-width: 361px;
	}
	.balls {
		position: absolute;
		top: -100px;
		right: -34px;
		z-index: -1;
	}
	.ball {
		position: absolute;
		top: -55px;
		right: 23px;
		z-index: 10;
	}

	.registration-border-container {
		height: 100%;
		margin: 0 auto;
		position: relative;
		z-index: 10;
	}
	.registration {
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
	.registration-container {
		padding: 24px 17px 26px 17px;
		height: 100%;
	}
	.registration__logo {
		width: 117px;
		height: 17px;
	}
	.registration__title {
		margin-top: 51px;
		width: 100%;
		word-wrap: break-word;
		color: white;
		font: normal 600 40px/120% "Noto Sans", sans-serif;
	}
	.registration__form {
		margin: 16px 0 0;
		font: $h5-regular;
	}
	.form__name {
		padding: 14.5px 8px;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		border-radius: 4px;
		color: white;
		&::placeholder {
			color: $gray-text;
		}
	}
	input:focus {
		outline: none;
	}
	.password-container {
		position: relative;
	margin-top: 12px;
	}
	.form__password {
		padding: 14.5px 8px;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		border-radius: 4px;
		color: white;
		&::placeholder {
			color: $gray-text;
		}
	}
	.currency-select {
		margin-top: 12px;
		height: 46px;
		width: 100%;
		position: relative;
		z-index: 9999;
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
		right: 15px;
		width: 20px;
		height: 20px;
		background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_2243_345)"><path d="M8.25016 3.53352C8.82377 3.39925 9.41105 3.33213 10.0002 3.33352C15.8335 3.33352 19.1668 10.0002 19.1668 10.0002C18.661 10.9465 18.0577 11.8375 17.3668 12.6585M11.7668 11.7669C11.538 12.0125 11.262 12.2095 10.9553 12.3461C10.6486 12.4828 10.3176 12.5562 9.9819 12.5622C9.64623 12.5681 9.3128 12.5063 9.0015 12.3806C8.69021 12.2549 8.40743 12.0677 8.17003 11.8303C7.93264 11.5929 7.74549 11.3101 7.61975 10.9988C7.49402 10.6875 7.43227 10.3541 7.43819 10.0184C7.44411 9.68277 7.51759 9.35172 7.65423 9.04506C7.79087 8.73839 7.98787 8.46239 8.2335 8.23352M14.9502 14.9502C13.5257 16.036 11.7911 16.6376 10.0002 16.6669C4.16683 16.6669 0.833496 10.0002 0.833496 10.0002C1.87007 8.06843 3.30778 6.38069 5.05016 5.05018L14.9502 14.9502Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M0.833496 0.833496L19.1668 19.1668" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_2243_345"><rect width="20" height="20" fill="white" /></clipPath></defs></svg>');
	}
	.icon-show::before {
		position: absolute;
		content: "";
		top: 50%;
		transform: translateY(-50%);
		right: 15px;
		width: 20px;
		height: 16px;
		background: url('data:image/svg+xml,<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.833008 8.00016C0.833008 8.00016 4.16634 1.3335 9.99967 1.3335C15.833 1.3335 19.1663 8.00016 19.1663 8.00016C19.1663 8.00016 15.833 14.6668 9.99967 14.6668C4.16634 14.6668 0.833008 8.00016 0.833008 8.00016Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>');
	}
	.reminder {
		margin: 11px 0 0 22px;
		color: $gray-icon;
		font: $h6-regular;
		position: relative;
	}
	.reminder::before {
		position: absolute;
		content: "";
		background: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_4740_5511)"><path d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 10.6667V8" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 5.3335H8.00667" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_4740_5511"><rect width="16" height="16" fill="white" /></clipPath></defs></svg>');
		height: 16px;
		width: 16px;
		top: 0;
		left: -22px;
	}
	.confirm {
		margin-top: 46px;
		display: flex;
		position: relative;
	}
	.confirm__text {
		margin-left: 24px;
		position: relative;
	}
	input[type="checkbox"] {
		opacity: 0;
		position: absolute;
		z-index: 20;
		width: 18px;
		height: 18px;
	}
	.checkbox-svg {
		width: 18px;
		height: 18px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.confirm__label {
		font: $h6-regular;
		color: white;
		position: relative;
	}

	.confirm__link {
		display: inline-block;
		color: $gold-accent;
	}
	.buttons-container {
		margin-top: 12px;
		height: 104px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
