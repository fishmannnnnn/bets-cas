<template>
	<div class="circle-container">
		<div :class="isActive ? `circle-bg-${activeColor}` : 'circle-bg-default'">
			<div :class="isActive ? `circle-${activeColor}` : 'circle-default'">
                    <slot></slot>
			</div>
		</div>
		<div class="title">{{ title }}</div>
	</div>
</template>

<script setup>
	defineProps({
		isActive: {
			type: Boolean,
            default: false
		},
        title: String,
        activeColor: String
	});
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
	.circle-container {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
		align-items: center;
	}
	.circle-bg-default {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(
			180deg,
			rgba(158, 165, 182, 1) 5%,
			rgba(64, 65, 71, 1) 55%,
			rgba(254, 180, 36, 1) 100%
		);
		box-shadow: 2px 2px 6px 0 rgba(255, 163, 79, 0.5);
		padding: 1px;
        flex-shrink: 0;
	}
	.circle-bg-green {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(128deg, #37580e 0%, #8fd931 100%);
		box-shadow: 2px 2px 6px 0 rgba(143, 217, 49, 0.5);
		padding: 1px;
	}
	.circle-bg-yellow {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: $accent-stroke-gold-gradient;
		box-shadow: 2px 2px 6px 0 rgba(255, 163, 79, 0.5);
		padding: 1px;
	}
	.circle-bg-blue {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(0deg, #24C1E5 0%, #0C3992 100%);
		box-shadow: 2px 2px 6px 0 rgba(70, 202, 232, 0.5);
		padding: 1px;
	}
	.circle-bg-brown {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(218deg, #814012 0%, #E3992A 100%);
		box-shadow: 2px 2px 6px 0 rgba(255, 104, 56, 0.5);
		padding: 1px;
	}
	.circle-bg-red {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(218deg, #F97A71 0%, #6A211C 100%);
		box-shadow: 2px 2px 6px 0 rgba(253, 131, 122, 0.5);
		padding: 1px;
	}
	.circle-bg-purple {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(0deg, #A250E6 0%, #381888 100%);
		box-shadow: 2px 2px 6px 0 rgba(165, 76, 236, 0.5);
		padding: 1px;
	}

	.circle-default {
        flex-shrink: 0;
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			322deg,
			rgba(26, 27, 31, 1) 0%,
			rgba(101, 103, 111, 1) 100%
		);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.22);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-green {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(329deg, #35550c 0%, #8dd630 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-yellow {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: $accent-gold-gradient;
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-blue {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #25C4E7 0%, #0A4D8B 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-brown {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(218deg, #E7A94D 0%, #9A4E16 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-red {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(208deg, #621D18 0%, #FF695F 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-purple {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(218deg, #321782 0%, #962BEA 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.item__circle {
		width: 36px;
		height: 36px;
	}
    .title{
        font: normal 400 12px/120% "Noto Sans", sans-serif;
		color: white;
        text-align: center;
        word-wrap: normal;
        max-width: 63px;
    }
</style>
