<template>
	<div class="popup-container">
		<div class="popup" ref="closePopupRef">
			<div class="top-container">
				<div class="popup__title">Search</div>
				<svg
					@click="emitClose"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18 6L6 18"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M6 6L18 18"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</div>

			<div class="search-wrapper">
				<Search />
			</div>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	import { ref } from "vue";
	import Search from "@/components/layout/inputs/Search.vue";
	import { onClickOutside } from "@vueuse/core";
	const closePopupRef = ref(null);
	onClickOutside(closePopupRef, emitClose);
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.popup-container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(19px);
		z-index: 100000;
	}
	.popup {
		position: fixed;
		z-index: 100000;
		bottom: 0;
		left: 0;
		padding: 30px 14px 130px 16px;
		width: 100%;
		box-shadow: inset 0 2px 4px 0 rgba(255, 255, 255, 0.32),
			0 -4px 20px 0 rgba(255, 215, 71, 0.42);
		background: linear-gradient(180deg, #323336 0%, #080e13 14.5%);
		border-radius: 12px 12px 0 0;
		border-top: 1px solid $gold-accent;
		// filter: drop-shadow(0 -4px 10px rgba(255, 215, 71, 0.42));
		color: white;
	}

	.top-container {
		display: flex;
		justify-content: space-between;
	}
	.popup__title {
		font: $h3;
	}
	.search-wrapper {
		margin-top: 11px;
	}
</style>
