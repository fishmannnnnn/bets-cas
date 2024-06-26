<template>
	<div class="tooltip">
		<div class="square"></div>
		<div class="text">
			{{ message }}
		</div>
	</div>
</template>

<script setup>
defineProps({
    message: String
})
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.square {
		position: absolute;
		top: -6px;
		margin-left: 14px;
		width: 11px;
		height: 11px;
		rotate: 45deg;
		background: $red-validation;
		z-index: 1000;
	}
	.tooltip {
		position: relative;
        z-index: 1000;
	}
	.text {
		width: fit-content;
		padding: 4px 3px 5px 4px;
		background: $red-validation;
		border-radius: 4px;
		color: white;
		font: $h7-regular;
	}
</style>
