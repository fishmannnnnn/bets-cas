<script setup>
	import { inject, ref } from "vue";
	import Selector from "../inputs/Selector.vue";
	import ButtonMedium from "../buttons/ButtonMedium.vue";
	import { onClickOutside } from "@vueuse/core";

	const { selectedLanguage } = inject("selectedLanguage");
	const menuRef = ref(null);
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	onClickOutside(menuRef, emitClose);

	const getImageUrl = (name) =>
		new URL(`/src/assets/country-list/${name}.svg`, import.meta.url).href;

	const isAccordeonOpened = ref(true);
	const handleAccordeonClick = () => {
		isAccordeonOpened.value = !isAccordeonOpened.value;
	};
	const showSelectorPopup = ref(false);
	const handleClose = (newValue) => {
		showSelectorPopup.value = newValue;
	};

	const itemsList = [
		{
			flag: "GB",
			language: "English",
		},
		{
			flag: "ES",
			language: "Spanish",
		},
		{
			flag: "FR",
			language: "French",
		},
		{
			flag: "TR",
			language: "Turkish",
		},
		{
			flag: "HT",
			language: "Creole",
		},
		{
			flag: "PT",
			language: "Portuguese",
		},
		{
			flag: "UA",
			language: "Ukrainian",
		},
		{
			flag: "RU",
			language: "Russian",
		},
	];
</script>
<template>
	<div class="side-menu" ref="menuRef">
		<div :class="showSelectorPopup ? 'selector-bg' : ''">
			<Transition name="ontop" appear>
				<div class="language-selector" v-if="showSelectorPopup">
					<Selector
						title="Select a language"
						:itemsList="itemsList"
						@close="handleClose" />
				</div>
			</Transition>
		</div>

		<div class="side-menu__container">
			<div class="container-left">
				<svg
					class="menu-close"
					@click="emitClose"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect
						x="16"
						y="1.45447"
						width="20.5704"
						height="2.05704"
						rx="1.02852"
						transform="rotate(135 16 1.45447)"
						fill="white" />
					<rect
						x="1.45459"
						width="20.5704"
						height="2.05704"
						rx="1.02852"
						transform="rotate(45 1.45459 0)"
						fill="white" />
				</svg>
				<img
					class="side-menu__logo"
					src="@/assets/side-menu/logo.svg" />
			</div>
			<div class="side-menu__region" @click="showSelectorPopup = true">
				<!-- <img :src="getImageUrl(selectedLanguage)" /> -->
				<div class="selected-lang">{{ selectedLanguage }}</div>
			</div>
		</div>
		<nav class="side-menu__nav">
			<ul class="nav__list">
				<li class="list__item item-home">
					<h2 class="nav__title">Home</h2>
				</li>
				<li class="list__item item-live">
					<h2 class="nav__title">Live</h2>
				</li>
				<li class="list__item item-prematch">
					<h2 class="nav__title">Pre-match</h2>
				</li>
				<li class="list__item item-games">
					<h2 class="nav__title">Games</h2>
				</li>
				<li class="list__item item-results">
					<h2 class="nav__title">Results</h2>
				</li>
				<li class="list__item item-support">
					<h2 class="nav__title">Support</h2>
				</li>
				<li
					:class="[
						'list__item',
						'item-info',
						isAccordeonOpened ? 'item-opened' : 'item-closed',
					]"
					@click="handleAccordeonClick">
					<div class="item-info__container">
						<h2
							:class="[
								'nav__title',
								isAccordeonOpened ? 'active' : '',
							]">
							Info
						</h2>
						<svg
							v-if="isAccordeonOpened"
							width="12"
							height="7"
							viewBox="0 0 12 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 6L6 1L11 6"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<svg
							v-else
							width="12"
							height="7"
							viewBox="0 0 12 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							transform="matrix(1,0,0,-1,0,0)">
							<path
								d="M1 6L6 1L11 6"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
					</div>
					<ul class="item-info__list" v-if="isAccordeonOpened">
						<li>
							<h4>About us</h4>
						</li>
						<li>
							<h4>Affiliate program</h4>
						</li>
						<li>
							<h4>Rules</h4>
						</li>
						<li>
							<h4>Terms of Use</h4>
						</li>
					</ul>
				</li>
			</ul>
		</nav>

		<div class="profile-bottom__container">
			<ButtonMedium type="secondary">
				<svg
					width="18"
					height="19"
					viewBox="0 0 18 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.09269 4.63469C6.09269 3.00292 7.40101 1.69238 8.99983 1.69238C10.5987 1.69238 11.907 3.00292 11.907 4.63469C11.907 6.26647 10.5987 7.577 8.99983 7.577C7.40101 7.577 6.09269 6.26647 6.09269 4.63469ZM8.99983 0.192383C6.55908 0.192383 4.59269 2.18805 4.59269 4.63469C4.59269 7.08133 6.55908 9.077 8.99983 9.077C11.4406 9.077 13.407 7.08133 13.407 4.63469C13.407 2.18805 11.4406 0.192383 8.99983 0.192383ZM5.34269 11.2695C4.17151 11.2695 3.04977 11.7393 2.22384 12.5732C1.39814 13.4068 0.935547 14.536 0.935547 15.7118V17.558C0.935547 17.9722 1.27133 18.308 1.68555 18.308C2.09976 18.308 2.43555 17.9722 2.43555 17.558V15.7118C2.43555 14.9292 2.74356 14.18 3.28956 13.6288C3.83532 13.0778 4.574 12.7695 5.34269 12.7695H12.657C13.4257 12.7695 14.1643 13.0778 14.7101 13.6288C15.2561 14.18 15.5641 14.9292 15.5641 15.7118V17.558C15.5641 17.9722 15.8999 18.308 16.3141 18.308C16.7283 18.308 17.0641 17.9722 17.0641 17.558V15.7118C17.0641 14.536 16.6015 13.4068 15.7758 12.5732C14.9499 11.7393 13.8282 11.2695 12.657 11.2695H5.34269Z"
						fill="#F5AD22" />
				</svg>
			</ButtonMedium>
			<ButtonMedium>GO!</ButtonMedium>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "@/styles/global";
	.selected-lang{
		font: $h4-medium;
		position: relative;
		color: white;
	}
	.selector-bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(9px);
		z-index: 10000;
	}
	.language-selector {
		position: absolute;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
	}
	.side-menu {
		width: 89%;
		min-width: 280px;
		height: 100dvh;
		padding: 38px 20px 0 20px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(15px);
	}
	.menu-close {
		margin-left: 11px;
	}
	.side-menu__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.container-left {
		display: flex;
		align-items: center;
	}
	.side-menu__logo {
		width: 117px;
		height: 16px;
		margin-left: 21px;
	}
	.side-menu__region {
		background: url("@/assets/side-menu/region-bg.svg");
		width: 32px;
		height: 26px;
		padding: 4px;
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			width: 22px;
			height: 16px;
			margin: 0 auto;
		}
	}
	.button-deposit {
		margin-top: 23px;
	}
	.side-menu__nav {
		padding: 31px 7px 50px 46px;
		height: calc(100% - 180px);
		touch-action: none;
		-webkit-overflow-scrolling: none;
		overflow: hidden;
		overscroll-behavior: none;
		overflow-y: scroll;
	}
	.nav__list {
		list-style-type: none;
		padding: 0;
	}
	.list__item {
		margin-top: 34px;
		&:nth-child(1) {
			margin-top: 0;
		}
	}

	.nav__title {
		font: $h2;
		color: white;
	}
	.item-home {
		position: relative;
	}
	.item-home::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/home.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-live {
		position: relative;
	}
	.item-live::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/live.svg");
		z-index: 1000;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-prematch {
		position: relative;
	}
	.item-prematch::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/prematch.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-games {
		position: relative;
	}
	.item-games::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/games.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-results {
		position: relative;
	}
	.item-results::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/results.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-support {
		position: relative;
	}
	.item-support::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/support.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-info__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.active {
		color: $gold-accent;
	}
	.item-info {
		position: relative;
	}
	.item-info::before {
		content: "";
		position: absolute;
		top: -7px;
		left: -46px;
		height: 38px;
		width: 38px;
		background: url("@/assets/side-menu/info.svg");
		z-index: 1;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.item-info__list {
		padding: 0;
		list-style-type: none;
		li {
			margin-top: 12px;
		}
		h4 {
			color: white;
			font: $h4-regular;
		}
	}
	.profile-bottom__container {
		width: calc(100% - 40px);
		position: absolute;
		bottom: 42px;
		left: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		z-index: 5;
	}
</style>
