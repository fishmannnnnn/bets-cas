<template>
	<div class="data-container">
		<div class="data">
			<svg
				@click="handleStarClick"
				class="star"
				width="19"
				height="18"
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					:class="starActive ? 'star-active' : 'star-inactive'"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M9.5 1C9.79412 1 10.0627 1.16447 10.1929 1.42426L12.401 5.8308L17.339 6.54178C17.63 6.58367 17.8716 6.78463 17.9623 7.06018C18.053 7.33574 17.9771 7.63812 17.7664 7.84023L14.1939 11.2678L15.037 16.1101C15.0868 16.3957 14.9676 16.6844 14.7296 16.8547C14.4916 17.025 14.1761 17.0474 13.9158 16.9125L9.5 14.625L5.08422 16.9125C4.82388 17.0474 4.50838 17.025 4.2704 16.8547C4.03242 16.6844 3.91323 16.3957 3.96295 16.1101L4.80606 11.2678L1.23359 7.84023C1.02293 7.63812 0.946995 7.33574 1.0377 7.06018C1.1284 6.78463 1.37001 6.58367 1.66099 6.54178L6.59899 5.8308L8.80709 1.42426C8.93727 1.16447 9.20589 1 9.5 1Z"
					fill="none"
					stroke="none"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
			<div class="id-container">
				<div class="id">{{ data.id }}</div>
				<svg
					class="stats"
					width="13"
					height="13"
					viewBox="0 0 13 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2 1H11C11.5523 1 12 1.44772 12 2V11C12 11.5523 11.5523 12 11 12H10.4815C10.4936 11.9465 10.5 11.8908 10.5 11.8337V3.16699C10.5 2.75278 10.1642 2.41699 9.75 2.41699C9.33579 2.41699 9 2.75278 9 3.16699V11.8337C9 11.8908 9.0064 11.9465 9.01851 12H7.23149C7.2436 11.9465 7.25 11.8908 7.25 11.8337V6.41699C7.25 6.00278 6.91421 5.66699 6.5 5.66699C6.08579 5.66699 5.75 6.00278 5.75 6.41699V11.8337C5.75 11.8908 5.7564 11.9465 5.76851 12H3.98149C3.9936 11.9465 4 11.8908 4 11.8337V9.66699C4 9.25278 3.66421 8.91699 3.25 8.91699C2.83579 8.91699 2.5 9.25278 2.5 9.66699V11.8337C2.5 11.8908 2.5064 11.9465 2.51851 12H2C1.44772 12 1 11.5523 1 11V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.89543 0.895431 0 2 0H11C12.1046 0 13 0.895431 13 2V11C13 12.1046 12.1046 13 11 13H2C0.89543 13 0 12.1046 0 11V2Z"
						fill="white" />
				</svg>
			</div>
		</div>
        <div class="container-teams-date">
            <div class="teams">
                <div class="team" v-for="(item, index) in data.teams" :key="index">{{ item }}</div>
            </div>
            <div class="date">{{ data.date }}</div>
        </div>
	</div>
	<div class="table-container-wrapper">
		<div class="table-container">
			<div class="table">
				<div
					class="first-row"
					v-for="(item, index) in data.table[0]"
					:key="index">
					{{ item }}
				</div>
				<div
					class="second-row"
					v-for="(item, index) in data.table[1]"
					:key="index">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	defineProps({
		data: Object,
	});
	const starActive = ref(false);
	const handleStarClick = () => {
		starActive.value = !starActive.value;
	};
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.data-container {
		margin-top: 6px;
		padding: 8px 15px 0;
		background: $bg-gray;
		height: 66px;
	}
	.data {
		display: flex;
		width: 100%;
		gap: 5px;
	}
	.star-active {
		fill: $gold-accent;
		stroke: $gold-accent;
	}
	.star-inactive {
		fill: $gray-icon;
		stroke: $gray-icon;
	}
	.id-container {
        width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.id {
		font: $h7-regular;
		color: $gray-text;
	}
	.stats {
		margin-top: 2px;
		margin-left: auto;
	}
    .container-teams-date{
        display: flex;
        justify-content: space-between;
        margin-left: 25px;
    }
    .teams{
        font: $h5-regular;
        color: $gold-accent;
    }
    .date{
        font: $h6-medium;
        color: white;
        max-width: 104px;
        text-align: center;
        margin-right: 21px;
    }
	.table-container-wrapper{
		overflow-x: auto;
	}
	.table-container {
		padding: 2px 15px 4px;
	}
	@supports (-moz-appearance: none) {
		.table-container{
			display: table;
		}
	}
	.table {
		display: grid;
		border-radius: 4px;
		border: 1px solid #5a5e75;
		border-collapse: collapse;
		grid-template-columns: repeat(13, 1fr);
		text-align: center;
		white-space: nowrap;
		width: 100%;
		min-width: 756px;
		height: 70px;
		color: white;
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
