<script setup>
	import ButtonHead from "../buttons/ButtonHead.vue";
	import SideMenuUnregistered from "../menu/SideMenuUnregistered.vue";
	import { ref } from "vue";

	const showMenu = ref(false);
	const openMenu = () => {
		showMenu.value = true;
		document.body.classList.add("body-fixed");
		const bottomMenu = document.getElementsByClassName(
			"bottom-menu__wrapper"
		)[0];
		bottomMenu.classList.add("bottom-menu-inactive");
	};
	const handleClose = (newValue) => {
		showMenu.value = newValue;
		document.body.classList.remove("body-fixed");
		const bottomMenu = document.getElementsByClassName(
			"bottom-menu__wrapper"
		)[0];
		bottomMenu.classList.remove("bottom-menu-inactive");
	};
	const props = defineProps({
		className: String,
	});
</script>
<template>
	<header class="header-bg">
		<div class="bg__rect"></div>
		<div class="bg__right"></div>
		<div class="header__content">
			<div class="container-left">
				<svg
					class="header__menu"
					@click="openMenu"
					width="20"
					height="12"
					viewBox="0 0 20 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect width="20" height="2" rx="1" fill="white" />
					<rect y="5" width="20" height="2" rx="1" fill="white" />
					<rect y="10" width="20" height="2" rx="1" fill="white" />
				</svg>
				<img class="header__logo" src="@/components/icons/Logo.svg" />
			</div>
			<div class="container-right">
				<h5 class="header__login">Login</h5>
				<ButtonHead className="header__button" />
			</div>
		</div>
	</header>
	<Transition name="slide">
		<div class="menu-container" v-if="showMenu">
			<SideMenuUnregistered @close="handleClose" />
		</div>
	</Transition>
</template>
<style lang="scss" scoped>
	@import "@/styles/global";
	.menu-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100dvh;
		width: 100vw;
	}
	.header-bg {
		border-radius: 4px;
		position: relative;
	}
	.bg__rect {
		height: 50px;
		width: calc(100% - 17px);
		background: $bg-gray;
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
	}
	.bg__right {
		background: url('data:image/svg+xml,<svg width="18" height="50" viewBox="0 0 18 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 50H0.110168C1.23212 50 2.30249 49.5288 3.06018 48.7014L16.95 33.533C17.6254 32.7954 18 31.8317 18 30.8316V4C18 1.79086 16.2091 0 14 0H0V50Z" fill="%2323252B"/></svg>');
		height: 50px;
		width: 18px;
		position: absolute;
		top: 0px;
		right: 0px;
	}
	.header__content {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 0px 16px 0 12px;
		top: 0px;
		left: 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.container-left {
		display: flex;
		align-items: center;
		width: 130px;
		justify-content: space-between;
	}
	.container-right {
		display: flex;
		align-items: center;
		width: 157px;
		justify-content: space-between;
	}
	.header__menu {
		min-width: 20px;
		height: 12px;
	}
	.header__logo {
		width: 77%;
		max-width: 100px;
		height: 15px;
	}
	.header__login {
		font: $h5-medium;
		color: $gold-accent;
		padding-left: 5px;
	}
</style>
