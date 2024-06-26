<script setup>
	import { inject, ref } from "vue";
	import ButtonMedium from "../buttons/ButtonMedium.vue";
	import Selector from "../inputs/Selector.vue";
	import { onClickOutside } from "@vueuse/core";

	const { selectedLanguage } = inject("selectedLanguage");

	const menuRef = ref(null);
	const emit = defineEmits(["close"]);

	const emitClose = () => {
		emit("close", false);
	};
	onClickOutside(menuRef, emitClose);

	const isAccordeonOpened = ref(true);
	const handleAccordeonClick = () => {
		isAccordeonOpened.value = !isAccordeonOpened.value;
	};

	const getImageUrl = (name) =>
		new URL(`/src/assets/country-list/${name}.svg`, import.meta.url).href;

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
		<nav :class="['side-menu__nav']">
			<div class="button-deposit">
				<ButtonMedium text="Deposit" />
			</div>
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
			<div class="profile-bottom__container-left">
				<img class="profile" src="@/assets/side-menu/profile.svg" />
				<div class="info">
					<p class="info__id">ID 1234567</p>
					<p class="info__deposit">600 000.00 USD</p>
				</div>
			</div>
			<div class="profile-bottom__container-right">
				<h5 class="logout">Log out</h5>
				<svg
					class="logout-svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M16 17L21 12L16 7"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M21 12H9"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "@/styles/global";
	@media (max-width: 330px) {
		.info p.info__deposit {
			font: normal 500 14px/120% "Noto Sans", sans-serif;
		}
	}
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
		z-index: 100000;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(15px);
	}
	.menu-close {
		margin-left: 11px;
		min-width: 16px;
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
	.side-menu__nav {
		margin-top: 23px;
		height: calc(100% - 140px);
		touch-action: none;
		-webkit-overflow-scrolling: none;
		overflow: hidden;
		overscroll-behavior: none;
		overflow-y: scroll;
	}
	.nav__list {
		padding: 0;
		padding: 23px 7px 50px 46px;
		list-style-type: none;
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
		z-index: 1000;
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
		z-index: 1000;
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
		z-index: 1000;
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
		z-index: 1000;
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
		z-index: 1000;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.active {
		color: $gold-accent;
	}
	.item-info__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
		z-index: 1000;
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
		position: absolute;
		bottom: 41px;
		left: 20px;
		padding-top: 10px;
		border-top: 1px solid #303134;
		width: calc(100% - 40px);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.profile-bottom__container-left {
		display: flex;
		align-items: center;
	}
	.profile-bottom__container-right {
		display: flex;
		align-items: center;
	}
	.profile {
		width: 38px;
		height: 38px;
		filter: drop-shadow(2px 2px 3px rgba(255, 163, 79, 0.6));
	}
	.info {
		margin-left: 10px;
		.info__id {
			font: $h5-bold;
			color: white;
		}
		.info__deposit {
			font: $h4-medium;
			color: $gold-accent;
		}
	}
	.logout {
		font: $h5-regular;
		color: white;
	}
	.logout-svg {
		margin-left: 10px;
		width: 24px;
		height: 24px;
	}
</style>
