<template>
	<div :class="'tab-bg-' + type">
		<div :class="['tab-' + type, flag == 'all' ? 'all' : '']">
			{{ text }}
		</div>
	</div>
</template>

<script setup>
	defineProps({
		type: { type: String, default: "inactive" },
		text: String,
		flag: String
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";

	.tab-bg-active {
		background: $accent-stroke-gold-gradient;
		padding: 1px;
		min-width: 48px;
		height: 30px;
		width: fit-content;
		border-radius: 4px;
	}
	.tab-active {
		background: $accent-gold-gradient;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		color: $bg-black;
		font: $h6-medium;
		padding: 6px 9px;
        text-align: center;
	}
	.tab-active .all {
		padding: 7px 16px;
		padding: 7px 10px;
		font: $h6-medium;
		display: flex;
		justify-content: space-around;
	}
	.tab-bg-inactive {
		height: 30px;
		width: fit-content;
	}
	.tab-inactive {
		border-radius: 4px;
		color: white;
		min-width: 48px;
		background: $bg-black;
		width: 100%;
		padding: 7px 10px;
		font: $h6-medium;
		display: flex;
		justify-content: space-around;
	}
</style>
