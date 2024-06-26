<template>
	<div class="popup-container">
		<div class="popup" ref="closePopupRef">
			<div class="top-container">
				<div class="popup__title">Totals</div>
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
			<div class="table-titles">
				<div class="tu">TU</div>
				<div class="to">TO</div>
			</div>
			<div class="table-container">
				<div v-for="(item, index) in data" class="row">
					<div class="item">
						<label
							:class="[
								'radio-label',
								selectedRadioValue === item[0]
									? 'radio-label-checked'
									: '',
							]">
							<input
								type="radio"
								:value="item[0]"
								v-model="selectedRadioValue" />
							<span>{{ item[0] }}</span>
						</label>
						<div class="container-right">
							<div
								class="value"
								:id="index + '0'"
								@click="selectItem($event)">
								<PopupInputFrame
									:value="item[1]"
									:type="
										selectedItem == index + '0'
											? 'active'
											: 'inactive'
									" />
							</div>
							<div
								class="value"
								:id="index + '1'"
								@click="selectItem($event)">
								<PopupInputFrame
									:value="item[2]"
									:type="
										selectedItem == index + '1'
											? 'active'
											: 'inactive'
									" />
							</div>
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
	const selectedRadioValue = ref("");
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
		padding: 30px 15px 20px 9px;
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
	.table-titles {
		margin-top: 14px;
		display: flex;
		justify-content: flex-end;
		padding-right: 4px;
		gap: 4px;
	}
	.tu,
	.to {
		font: $h5-bold;
		width: 76px;
		display: flex;
		justify-content: space-around;
	}
	.table-container {
		overflow: hidden;
		margin-top: 12px;
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 16px;
	}
	.item {
		padding: 0 4px 0 6px;
		display: flex;
		justify-content: space-between;
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
	.container-right {
		display: flex;
		gap: 4px;
	}
	.radio-label {
		display: flex;
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.radio-label::before {
		content: "";
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="%2323252B" stroke="%23313440" /></svg>');
	}
	.radio-label input[type="radio"] {
		display: none;
	}
	.radio-label-checked::before {
		content: "";
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="%2323252B" stroke="%23313440" /><rect x="3" y="3" width="12" height="12" rx="6" fill="%23F5AD22" /></svg>');
	}
</style>
