<template>
	<div class="message">
		<textarea
			class="message-input"
			type="textarea"
			draggable="false"
			:placeholder="text"
			@input="$emit('update:modelValue', $event.target.value); value = $event.target.value"
			:value="modelValue" />
		<div class="button">
			<svg
				:class="value != '' ? 'send-active' : 'send-inactive'"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18.3327 1.66797L9.16602 10.8346"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<path
					d="M18.3327 1.66797L12.4993 18.3346L9.16602 10.8346L1.66602 7.5013L18.3327 1.66797Z"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
    const value = ref('');
	defineProps({
		text: String,
		modelValue: String,
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.message {
		position: relative;
		width: 100%;
		min-height: 49px;
		height: 100%;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
		padding: 1px;
		border-radius: 12px;
	}
	.message-input {
		position: absolute;
		top: 1px;
		left: 1px;
		width: calc(100% - 2px);
		height: calc(100% - 2px);
		resize: none;
		padding: 4px 40px 4px 11px;
		font: $h5-regular;
		border-radius: 11px;
		border: none;
		background: $bg-gray;
		color: white;
		&::placeholder {
			caret-color: white;
			color: $gray-text;
		}
	}
	.message-input:focus {
		outline: none;
	}
	.message-input:focus::-webkit-input-placeholder {
		color: transparent;
		opacity: 0;
	}
	.message-input:focus::-moz-placeholder {
		color: transparent;
		opacity: 0;
	}
	.message-input:-moz-placeholder {
		color: transparent;
		opacity: 0;
	}

	.button {
		position: absolute;
		top: 0;
		right: 0;
		padding: 18.5px 13px 4px 4px;
	}
	.send-inactive {
		stroke: #5e6471;
	}
	.send-active {
		stroke: $gold-accent;
	}
</style>
