<template>
	<div class="bet-input-wrapper">
		<input class="bet-input" type="text" :placeholder="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" />
		<div class="currency">{{ currency }}</div>
	</div>
</template>

<script setup>
	defineProps({
		text: String,
		currency: String,
		modelValue: String,
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	@media (max-width: 350px) {
		input.bet-input {
			font: $h6-regular;
		}
	}
	.bet-input-wrapper {
		display: flex;
		height: 46px;
	}
	.bet-input {
		width: 100%;
		padding: 0 4px 0 8px;
		font: $h5-regular;
		border-radius: 4px 0 0 4px;
		border: none;
		background: $bg-gray;
		color: white;
		&::placeholder {
			caret-color: white;
			color: $gray-text;
		}
	}
	.bet-input:focus {
		outline: none;
	}
	.bet-input:focus::-webkit-input-placeholder {
		color: transparent;
		opacity: 0;
	}
	.bet-input:focus::-moz-placeholder {
		color: transparent;
		opacity: 0;
	}
	.bet-input:-moz-placeholder {
		color: transparent;
		opacity: 0;
	}
	.currency {
		margin-left: -1px;
		border-radius: 0 4px 4px 0;
		padding: 0 8px 0 0;
		right: 10px;
		font: $h5-regular;
		background: $bg-gray;
		color: $gray-text;
		display: grid;
		place-items: center;
	}
</style>
