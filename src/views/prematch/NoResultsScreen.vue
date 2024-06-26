<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="page-content">
			<div class="back">
				<svg
					width="8"
					height="12"
					viewBox="0 0 8 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.5 11L1.5 6L6.5 1"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<div class="back-title">Search results</div>
			</div>
			<div class="question-container">
				<img src="@/assets/images/no-result.png" class="question" />
			</div>
			<h1 class="title">No results</h1>
			<div class="text">Please try again</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu />
		</div>
	</div>
</template>

<script setup>
	import HeadUnregistered from "@/components/layout/head/HeadUnregistered.vue";
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.page {
		background: $bg-black;
		min-height: 100dvh;
		height: 100%;
		padding-bottom: 91px;
		overflow-y: scroll;
	}
	.page-content {
		padding: 15px;
	}
	.back {
		display: flex;
		gap: 10px;
		align-items: center;
	}
	.back-title {
		font: $h2;
		color: white;
	}
	.question-container {
		width: fit-content;
		margin: 136px auto 0;
		padding-right: 20px;
	}
	.question {
		width: 103px;
		height: 170px;
		transform: rotate(15deg);
	}
	.title {
		color: white;
		font: normal 600 40px/120% "Noto Sans", sans-serif;
		text-align: center;
		padding: 0 15px;
		margin: 10px auto;
	}
	.text {
		color: $gold-accent;
		font: $h4-medium;
		text-align: center;
		max-width: 315px;
		padding: 0 15px;
		margin: 0 auto;
	}
</style>
