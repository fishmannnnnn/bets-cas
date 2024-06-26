<template>
	<div class="header-bg">
		<div class="green-gradient" v-if="data.unread"></div>
		<div class="header">
			<div class="subject">
				<span class="subject__title">Subject:</span>
				<span class="subject__value">{{ data.subject }}</span>
			</div>
			<div class="date">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.6667 2.66797H3.33333C2.59695 2.66797 2 3.26492 2 4.0013V13.3346C2 14.071 2.59695 14.668 3.33333 14.668H12.6667C13.403 14.668 14 14.071 14 13.3346V4.0013C14 3.26492 13.403 2.66797 12.6667 2.66797Z"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M10.666 1.33203V3.9987"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M5.33398 1.33203V3.9987"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M2 6.66797H14"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<div class="date__date">
					{{ data.date }}
				</div>
				<div class="date__time">
					{{ data.time }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		data: Object,
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.header-bg {
		position: relative;
		width: 100%;
		height: 49px;
		border-radius: 12px;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
		padding: 1px;
	}
	.green-gradient {
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 43%;
		background: linear-gradient(
			0deg,
			rgba(0, 252, 119, 1) 0%,
			rgba(0, 150, 71, 0) 100%
		);
		border-radius: 12px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.header {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		background: $bg-gray;
		border-radius: 11px;
		padding: 0 12px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.subject {
		font: $h5-medium;
		width: 50%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.subject__title {
		color: $gray-text;
	}
	.subject__value {
		margin-left: 6px;
	}
	.date {
		display: flex;
		align-items: center;
		font: $h6-medium;
	}
	.date__date {
		margin-left: 2px;
	}
	.date__time {
		margin-left: 4px;
	}
</style>
