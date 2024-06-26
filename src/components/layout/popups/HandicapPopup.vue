<template>
	<div class="popup-container">
		<div class="popup" ref="closePopupRef">
			<div class="top-container">
				<div class="popup__title">Handicap</div>
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
			<div class="table-container">
				<div v-for="(item, index) in data" class="grid-row">
					<div class="grid-item">
						<div class="coef">{{ item[0] }}</div>
						<div
							class="value"
							:id="index"
							@click="selectItem($event)">
							<PopupInputFrame
								:value="item[1]"
								:type="
									selectedItem == index
										? 'active'
										: 'inactive'
								" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { onClickOutside } from "@vueuse/core";
	import PopupInputFrame from "@/components/layout/popups/PopupInputFrame.vue";
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	defineProps({
		data: Array,
	});
	const closePopupRef = ref(null);
	onClickOutside(closePopupRef, emitClose);

	const selectedItem = ref("");
	const selectItem = (event) => {
		selectedItem.value = event.currentTarget.id;
	};
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.popup-container {
		padding: 90px 15px 110px;
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(19px);
		z-index: 100000;
		overflow-y: scroll;
	}
	.popup {
		z-index: 100000;
		padding: 30px 15px 12px 9px;
		width: 100%;
		box-shadow: inset 0 2px 4px 0 rgba(255, 255, 255, 0.32),
			0 -4px 20px 0 rgba(255, 215, 71, 0.42);
		background: linear-gradient(180deg, #323336 0%, #080e13 14.5%);
		border-radius: 12px;
		border-top: 1px solid $gold-accent;
		color: white;
	}

	.top-container {
		display: flex;
		justify-content: space-between;
	}
	.popup__title {
		font: $h3;
	}
	.table-container {
		overflow: hidden;
		margin-top: 14px;
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
		row-gap: 16px;
	}
	.row-item {
		display: contents;
	}
	.grid-item {
		padding: 0 4px 0 6px;
		display: grid;
		grid-template-columns: 43px 76px;
		align-items: center;
		position: relative;
		&::after {
			inline-size: 100vw;
			block-size: 1px;
			inset-inline-start: 0;
			inset-block-start: -8px;
			background-color: $separator;
			content: "";
			position: absolute;
			z-index: 1;
		}
	}
	.coef {
		font: $h4-medium;
	}
</style>
