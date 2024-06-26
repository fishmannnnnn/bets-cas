<template>
	<div class="progress-bar">
		<div class="bg-bar">
			<div
				class="bar orange orange-gradient"
				:style="`width: ${progress}%`"></div>
		</div>
		<div class="points">
			<div :class="['point', progress >= 0 ? 'orange' : '']"></div>
			<div :class="['point', progress >= 50 ? 'orange' : '']"></div>
			<div :class="['point', progress >= 100 ? 'orange' : '']"></div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		progress: String,
	});
</script>

<style lang="scss" scoped>
	.progress-bar {
		position: relative;
		z-index: 2;
	}
	.points {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.point {
		width: 4px;
		height: 14px;
		border-radius: 12px;
		background: #d9d9d9;
	}
	.bg-bar {
		position: absolute;
		z-index: -1;
		top: 5px;
		width: 100%;
		height: 4px;
		background: #d9d9d9;
	}
	.bar {
		overflow-x: hidden;
		height: 4px;
	}
	.orange {
		background: #f8a425;
		box-shadow: 0 0 12px 0 rgba(255, 163, 79, 0.6), 0 0 2px 0 #ffa34f;
	}
	.orange-gradient {
		background: linear-gradient(270deg, #fff06e 0%, #ffb341 100%);
	}
</style>
