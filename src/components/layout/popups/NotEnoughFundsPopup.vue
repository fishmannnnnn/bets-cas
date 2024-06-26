<template>
		<div class="popup" ref="closePopupRef">
			<div class="top-container">
				<div class="popup__title">Attention!</div>
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
            <div class="popup-description">There are not enogh funds to place a bet</div>
			
			<div class="button-wrapper">
				<ButtonLarge text="Payment"/>
			</div>
		</div>
</template>

<script setup>
	import { ref } from "vue";
	import { onClickOutside } from "@vueuse/core";
	import ButtonLarge from "../buttons/ButtonLarge.vue";
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	defineProps({
		data: Array,
	});
	const closePopupRef = ref(null);
	onClickOutside(closePopupRef, emitClose);
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.popup {
		z-index: 100000;
		padding: 30px 15px 30px;
		width: 100%;
		height: fit-content;
		box-shadow: inset 0 2px 4px 0 rgba(255, 255, 255, 0.32),
			0 -4px 20px 0 rgba(255, 215, 71, 0.42);
		background: linear-gradient(180deg, #323336 0%, #080e13 14.5%);
		border-radius: 12px;
		border: 1px solid $gold-accent;
		color: white;
	}
	.top-container {
		display: flex;
		justify-content: space-between;
	}
	.popup__title {
		font: $h3;
	}
	.container-right {
		display: flex;
		gap: 4px;
	}
    .popup-description{
        color: $gray-text;
        font: $h4-medium;
        margin-top: 15px;
    }
	
	.button-wrapper{
		padding-top: 30px;
	}
</style>
