<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="page-content">
			<div class="star">
				<img src="@/assets/images/golden-star.png" alt="" />
			</div>
			<h1 class="title">No saved events</h1>
			<div class="text">
				To save an elements and track changes to it, click on the icon
				in the event
			</div>
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
	.star {
		padding-left: 20px;
		margin: 0 auto;
		margin-top: 127px;
		width: fit-content;
	}
	.title {
		color: white;
		font: normal 600 40px/100% "Noto Sans", sans-serif;
		text-align: center;
		padding: 0 15px;
		margin: 10px auto;
	}
	.text {
		color: $gold-accent;
		font: normal 500 15px/140% "Noto Sans", sans-serif;
		text-align: center;
		max-width: 315px;
		padding: 0 15px;
		margin: 0 auto;
	}
</style>
