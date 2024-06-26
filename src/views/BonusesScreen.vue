<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered counter="22" />
		</div>
		<div class="page-content">
			<div class="page-title">Bonuses</div>
			<div class="image-box" id="bonuses-img">
				<div class="image-box__stroke">
					<div class="image-box__top-left-stroke"></div>
					<div class="image-box__content">
						<img
							src="@/assets/images/about-slots.png"
							class="image-box__img"
							id="slots" />
					</div>
				</div>
			</div>
			<div class="full-title">Guaranteed Bonus</div>
			<div class="description">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the
			</div>
			<div class="image-box" id="guaranteed">
				<div class="image-box__stroke">
					<div class="image-box__top-left-stroke"></div>
					<div class="image-box__content">
						<img
							src="@/assets/images/about-balls.png"
							class="image-box__img"
							id="balls" />
					</div>
				</div>
			</div>
			<div class="full-title">Cashback if you lose</div>
			<div class="description">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the
			</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu />
		</div>
	</div>
</template>

<script setup>
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
	import HeadUnregistered from "@/components/layout/head/HeadUnregistered.vue";
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.page {
		background: $bg-black;
		height: 100%;
		min-height: 100dvh;
		padding-bottom: 71px;
	}
	.page-content {
		margin-top: 18px;
		color: white;
		padding: 0 15px;
	}
	.page-title {
		font: $h2;
	}

	.image-box__stroke {
		height: 146px;
		width: 100%;
		background: linear-gradient(136deg, #090b0c 68%, #f8b025 100%);
		padding: 1px;
		border-radius: 8px;
		box-shadow: 0 0 12px 0 rgba(255, 163, 79, 0.6), 0 0 2px 0 #ffa34f;
		position: relative;
	}
	.image-box__top-left-stroke {
		position: absolute;
		top: 0;
		left: 0;
		border-top-left-radius: 8px;
		width: 19%;
		height: 41%;
		background: linear-gradient(
			134deg,
			rgba(248, 176, 37, 1) 0%,
			rgba(30, 34, 37, 0) 40%
		);
	}
	.image-box__content {
		position: relative;
		z-index: 3;
		height: 100%;
		width: 100%;
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgb(49, 54, 57) 0%,
			rgb(25, 30, 34) 100%
		);
		border-radius: 7px;
		position: relative;
	}
	#bonuses-img {
		margin-top: 11px;
	}
	#slots {
		width: 154px;
		height: auto;
	}
	.image-box__img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.full-title {
		padding-top: 15px;
		font: $h1;
	}
	.description {
		margin-top: 6px;
		font: $h4-regular;
	}
	#guaranteed {
		margin-top: 30px;
	}
	#balls {
		width: 259px;
		height: auto;
	}
</style>
