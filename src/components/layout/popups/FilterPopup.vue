<template>
	<div class="popup" ref="closePopupRef">
		<div class="top-container">
			<div class="popup__title">Filter</div>
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
		<div class="popup-content">
			<div class="date">
				<div class="input-title">Period</div>
				<input
					class="date__input input-placeholder-top"
					maxlength="23"
                    ref="dateRangeInput"
					v-model="dateInput"
					@input="dateMask.mask(dateRangeInput)" />
				<svg
					class="date__svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M13.3335 1.66797V5.0013"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M6.6665 1.66797V5.0013"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M2.5 8.33203H17.5"
						stroke="#5E6471"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</div>
			<Select
				placeholder="Result"
				:modelValue="selectValue"
				:items="selectValues"
				@update:modelValue="selectValue = $event" />
		</div>

		<div class="buttons">
			<ButtonSmall text="Clear all" type="secondary" />
			<ButtonSmall text="Apply" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { onClickOutside } from "@vueuse/core";
	import Inputmask from "inputmask";

	import ButtonSmall from "../buttons/ButtonSmall.vue";
	import Select from "../inputs/Select.vue";
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	const closePopupRef = ref(null);
	onClickOutside(closePopupRef, emitClose);

	const selectValue = ref("");
	const selectValues = ["Result 1", "Result 2", "Result 3"];

    const dateInput = ref("")
    const dateRangeInput = ref(null);
    const dateMask = new Inputmask("99.99.9999 - 99.99.9999", {
        placeholder: "00.00.0000 - 00.00.0000",
        separator: " - ",
        alias: "datetime",
        inputFormat: "dd.mm.yyyy"
    });
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
	.popup-content {
		color: $gray-text;
		font: $h4-medium;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.buttons {
		padding-top: 20px;
		display: flex;
		gap: 8px;
	}
    .date{
        position: relative;
    }
    .date__svg {
		position: absolute;
		top: 13px;
		right: 16px;
	}
    .input-placeholder-top {
		padding: 18.5px 8px 0;
		font: $h4-medium;
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
    .date__input{
        font: $h4-medium;
    }
    .input-title {
		position: absolute;
		top: 7.5px;
		left: 8px;
		font: $h7-regular;
		color: $gray-text;
	}
</style>
