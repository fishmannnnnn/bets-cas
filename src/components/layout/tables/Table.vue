<template>
	<div class="table">
		<div class="first-row" v-for="(item, index) in data[0]" :key="index">
			{{ item }}
		</div>
		<div class="second-row" v-for="(item, index) in data[1]" :key="index">
			{{ item }}
		</div>
	</div>
</template>

<script setup>
	const data = [
		[
			"W1",
			"X",
			"W2",
			"1X",
			"12",
			"X2",
			"H1",
			"H2",
			"More",
			"TU",
			"TO",
			"More",
			"All",
		],
		[
			"1",
			"1",
			"2.65",
			"3.5",
			"3.5",
			"3.5",
			"(+1.5) 1.85",
			"(+1.5) 1.85",
			"+17",
			"(1.5) 1.85",
			"(1.5) 1.85",
			"+17",
			"+217",
		],
	];
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.table {
		display: grid;
		overflow: hidden;
		border-radius: 4px;
		border: 1px solid #5a5e75;
		border-collapse: collapse;
		grid-template-columns: repeat(13, 1fr);
		text-align: center;
		white-space: nowrap;
		width: 756px;
		height: 70px;
		color: white;
		margin-bottom: 4px;
		margin-right: 15px;
	}
	.first-row {
		padding: 7px;
		background: $bg-gray;
		font: normal 600 13px/120% "Noto Sans", sans-serif;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
	}
	:nth-last-child(1 of .first-row) {
		border-right: none;
	}
	.second-row {
		padding: 12px;
		border-right: 1px solid black;
		background: rgb(66, 67, 72);
		font: normal 400 13px/120% "Noto Sans", sans-serif;
	}
	:nth-last-child(1 of .second-row) {
		border-right: none;
	}
</style>
