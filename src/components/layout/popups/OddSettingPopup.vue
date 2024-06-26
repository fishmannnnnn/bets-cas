<template>
		<div class="popup" ref="closePopupRef">
			<div class="top-container">
				<div class="popup__title">Setting</div>
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
            <div class="popup-description">Odds display setting</div>
			<div class="radio-group">
                <template v-for="(item, index) in options">
                    <label
					:class="[
						'radio-label',
						selectedRadioValue === item.id
							? 'radio-label-checked'
							: '',
					]">
					<input
						type="radio"
						:value="item.id"
						v-model="selectedRadioValue" />
					<span class="radio-title">{{ item.label }}</span>
				</label>
                </template>
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
								Show event IDs
							</label>
						</div>
					</div>
			<div class="button-wrapper">
				<ButtonLarge text="Save"/>
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

    const isChecked = ref(false);

	const selectedRadioValue = ref("option-3");
    const options = [
        {
            id: "option-1",
            label: "Decimal"
        },
        {
            id: "option-2",
            label: "Fractional"
        },
        {
            id: "option-3",
            label: "American"
        },
        {
            id: "option-4",
            label: "Hong Kong"
        },
        {
            id: "option-5",
            label: "Indonesian"
        },
        {
            id: "option-6",
            label: "Malaysian"
        },
        ]
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
	.container-right {
		display: flex;
		gap: 4px;
	}
    .popup-description{
        color: $gray-text;
        font: $h7-regular;
        margin-top: 3px;
    }
	.radio-label {
		display: flex;
		gap: 8px;
		align-items: center;
		margin-bottom: 24px;
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
	.radio-group{
		margin-top: 23px;
		font: $h4-medium;
        border-bottom: 1px solid $separator;
	}
	.radio-label:last-child{
		margin-bottom: 18px;
	}
	.confirm {
		margin-top: 20px;
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
		top: 50%;
        transform: translateY(-50%);
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
	.button-wrapper{
		padding-top: 30px;
	}
</style>
