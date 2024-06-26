<template>
	<div class="toast__info">
		<svg class="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 12.8V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 7.2002H10.0067" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.toast__info {
		min-width: 20px;
		max-height: 20px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.info-icon {
		min-width: 16px;
		min-height: 16px;
	}
	// .toast__text {
	// 	font: $h4-medium;
	// 	color: white;
	// 	width: 281px;
	// }
	// .toast__close {
	// 	min-width: 18px;
	// 	max-height: 18px;
	// }
</style>
