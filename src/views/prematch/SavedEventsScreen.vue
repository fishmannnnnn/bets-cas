<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="events">
			<div class="event" v-for="(item, index) in data" :key="index">
				<EventSaved :data="item.tableData" />
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
	import EventSaved from "@/components/layout/events/EventSaved.vue";

	const data = [
		{
			tableData: {
				imgName: "basketball",
				id: 12345,
				teams: ["Primer Unitet", "Carlos Alcaraz"],
				date: "Thurs. March 21 21:45",
				table: [
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
				],
			},
		},
		{
			tableData: {
				imgName: "basketball",
				id: 12345,
				teams: ["Primer Unitet", "Carlos Alcaraz"],
				date: "Thurs. March 21 21:45",
				table: [
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
				],
			},
		},
		{
			tableData: {
				imgName: "basketball",
				id: 12345,
				teams: ["Primer Unitet", "Carlos Alcaraz"],
				date: "Thurs. March 21 21:45",
				table: [
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
				],
			},
		},
		{
			tableData: {
				imgName: "basketball",
				id: 12345,
				teams: ["Primer Unitet", "Carlos Alcaraz"],
				date: "Thurs. March 21 21:45",
				table: [
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
				],
			},
		},
	];
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.page {
		background: $bg-black;
		min-height: 100dvh;
		height: 100%;
		padding-bottom: 91px;
	}
	.events {
		margin: 20px 0;
	}
</style>
