<template>
	<div :class="'frame-border-' + type">
		<div :class="'frame-inside-' + type">
			{{ value }}
		</div>
	</div>
</template>

<script setup>
	defineProps({
		type: String,
		value: Number,
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.frame-border-inactive {
        border-radius: 4px;
		width: 76px;
		height: 30px;
		padding: 1px;
		background: linear-gradient(
			0deg,
			rgba(47, 50, 63, 1) 0%,
			rgba(90, 94, 117, 1) 100%
		);
	}
	.frame-inside-inactive {
        width: 100%;
        height: 100%;
        border-radius: 3px;
		background: $bg-gray;
		box-shadow: inset 0 -2px 4px 0 rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: space-around;
		font: $h4-medium;
	}
	.frame-border-active {
        border-radius: 4px;
		width: 76px;
		height: 30px;
		padding: 1px;
		background: $accent-stroke-gold-gradient;
	}
	.frame-inside-active {
        width: 100%;
        height: 100%;
        border-radius: 3px;
		background: $accent-gold-gradient;
		box-shadow: inset 0 -2px 4px 0 rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: space-around;
		font: $h4-medium;
        color: $bg-black;
	}
</style>
