<template>
	<div class="select-container">
		<div
			:class="['select', modelValue == '' ? 'select-placeholder' : '']"
			@click="handlePlaceholderClick"
			ref="closeSelectRef">
			{{ modelValue == "" ? placeholder : modelValue }}
		</div>
		<div
			:class="[
				'select-content',
				placeholderOpened
					? 'select-content-visible'
					: 'select-content-hidden',
			]">
			<div
				class="select-item"
				v-for="item in items"
				:id="item"
				@click="$emit('update:modelValue', $event.target.id)">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { onClickOutside } from "@vueuse/core";
	defineProps({
		modelValue: String,
		placeholder: String,
		items: Array,
	});
	const placeholderOpened = ref(false);
	const handlePlaceholderClick = () => {
		placeholderOpened.value = !placeholderOpened.value;
	};
	const closeSelectRef = ref(null);
	onClickOutside(closeSelectRef, () => (placeholderOpened.value = false));
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.select {
		position: relative;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		border-radius: 4px;
		color: white;
		font: normal 400 14px/120% "Noto Sans", sans-serif;
		padding-left: 8px;
		display: grid;
		align-items: center;
	}
	.select-placeholder {
		color: $gray-text;
	}
	.select::after {
		position: absolute;
		content: "";
		height: 8px;
		width: 12px;
		background: url('data:image/svg+xml,<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="%235E6471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>');
		top: 50%;
		transform: translateY(-25%);
		right: 16px;
	}
	.select-content {
		margin-top: 5px;
		width: 100%;
		height: fit-content;
		background: #23252b;
		border-radius: 4px;
		border: 1px solid black;
	}
	.select-content-visible {
		display: block;
	}
	.select-content-hidden {
		display: none;
	}
	.select-item {
		padding: 14.5px 16px 14.5px 8px;
		font: normal 400 14px/120% "Noto Sans", sans-serif;
		color: white;
	}
</style>
