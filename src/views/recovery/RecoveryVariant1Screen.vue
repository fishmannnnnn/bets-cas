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
						<h1 class="recovery__title">Access recovery</h1>
						<form action="" class="recovery__form">
							<input
								class="form__name"
								type="text"
								v-model="nameState"
								placeholder="Phone number or email" />
						</form>
						<div class="restore-button">
							<ButtonLarge text="Restore" />
						</div>
						<div class="register-button">
							<router-link to="register">
								<ButtonLarge
									text="Registration"
									type="secondary" />
							</router-link>
						</div>
					</div>
					<div class="login-button">
						<h5 class="login-button__title">Login</h5>
						<svg
							class="login-button__arrow"
							width="23"
							height="12"
							viewBox="0 0 23 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.5303 6.53033C22.8232 6.23744 22.8232 5.76256 22.5303 5.46967L17.7574 0.696699C17.4645 0.403806 16.9896 0.403806 16.6967 0.696699C16.4038 0.989593 16.4038 1.46447 16.6967 1.75736L20.9393 6L16.6967 10.2426C16.4038 10.5355 16.4038 11.0104 16.6967 11.3033C16.9896 11.5962 17.4645 11.5962 17.7574 11.3033L22.5303 6.53033ZM0 6.75H22V5.25H0V6.75Z"
								fill="#F5AD22" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import ButtonLarge from "@/components/layout/buttons/ButtonLarge.vue";
	const nameState = ref("");
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
		top: -117px;
		left: calc(50% - 6px);
		transform: translateX(-50%);
		min-width: 352px;
	}
	.ball {
		position: absolute;
		z-index: 11;
		top: -105px;
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
		padding: 24px 17px 15px 17px;
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
	.restore-button {
		margin-top: 12px;
	}
	.register-button {
		margin-top: 188px;
	}
	.login-button {
		background: linear-gradient(180deg, #393a3d 0%, rgba(0, 0, 0, 0) 100%);
		padding: 15px 35px 14px 33px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.login-button__title {
		font: $h5-regular;
		color: $gold-accent;
	}
</style>
