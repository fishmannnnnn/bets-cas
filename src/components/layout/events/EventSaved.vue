<template>
	<div class="event" @click="onClick">
		<div class="event-bg">
			<img
				:src="getImageUrl(data.imgName)"
				class="event-img" />

			<div class="event-bg__rect-border">
				<div class="event-bg__rect"></div>
			</div>
			<div class="event-bg__right"></div>
			<div class="data">
				<div class="container-left">
					<svg
						@click="handleStarClick"
						class="star"
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							:class="
								starActive ? 'star-active' : 'star-inactive'
							"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.5 1C9.79412 1 10.0627 1.16447 10.1929 1.42426L12.401 5.8308L17.339 6.54178C17.63 6.58367 17.8716 6.78463 17.9623 7.06018C18.053 7.33574 17.9771 7.63812 17.7664 7.84023L14.1939 11.2678L15.037 16.1101C15.0868 16.3957 14.9676 16.6844 14.7296 16.8547C14.4916 17.025 14.1761 17.0474 13.9158 16.9125L9.5 14.625L5.08422 16.9125C4.82388 17.0474 4.50838 17.025 4.2704 16.8547C4.03242 16.6844 3.91323 16.3957 3.96295 16.1101L4.80606 11.2678L1.23359 7.84023C1.02293 7.63812 0.946995 7.33574 1.0377 7.06018C1.1284 6.78463 1.37001 6.58367 1.66099 6.54178L6.59899 5.8308L8.80709 1.42426C8.93727 1.16447 9.20589 1 9.5 1Z"
							fill="none"
							stroke="none"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<div class="container-id-teams">
						<div class="id">{{ data.id }}</div>
						<div class="teams">
							<div
								class="team"
								v-for="(item, index) in data.teams"
								:key="index">
								{{ item }}
							</div>
						</div>
					</div>
				</div>
				<div class="date">{{ data.date }}</div>
			</div>
		</div>
	</div>

	<div class="table-container-wrapper">
		<div class="table-container">
			<div class="table">
				<div class="title" id="empty"></div>
				<div class="title" id="handicap">Handicap</div>
				<div class="title" id="total">Total</div>
				<div class="title"></div>
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
	const getImageUrl = (name) => new URL(`/src/assets/events-icons/${name}.png`,import.meta.url).href;
	const starActive = ref(true);
	const handleStarClick = () => {
		starActive.value = !starActive.value;
	};
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.event {
		padding: 0 15px;
		height: 53px;
		position: relative;
	}
	.event-bg {
		position: relative;
		width: calc(100%);
	}
	.event-img {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-25%, -25%);
		z-index: 30;
	}

	.event-bg__rect-border {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(
			0deg,
			rgba(54, 56, 66, 1) 0%,
			rgba(37, 38, 43, 1) 100%
		);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(
			180deg,
			rgba(67, 71, 78, 1) 0%,
			rgba(36, 37, 40, 1) 100%
		);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}

	.event-bg__right {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_6_36" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" /></mask><g filter="url(%23filter0_i_6_36)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_6_36)" /></g><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_6_36)" mask="url(%23path-1-inside-1_6_36)" /><defs><filter id="filter0_i_6_36" x="0" y="-2" width="22" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="-2" /><feGaussianBlur stdDeviation="2" /><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" /><feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_36" /></filter><linearGradient id="paint0_linear_6_36" x1="10.7449" y1="1" x2="10.7449" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="%2343474E" /><stop offset="1" stop-color="%23242528" /></linearGradient><linearGradient id="paint1_linear_6_36" x1="13.0087" y1="46" x2="13.0087" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="%23363842" /><stop offset="1" stop-color="%2325262B" /></linearGradient></defs></svg>');
	}
	.data {
		height: 56px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 30;
		width: 100%;
		height: 100%;
		padding: 4px 44px 0 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
	.id {
		font: normal 400 12px/100% "Noto Sans", sans-serif;
		color: $gray-text;
	}
	.container-left {
		display: flex;
		gap: 5px;
		align-items: center;
	}
	.teams {
		font: $h5-regular;
		color: $gold-accent;
		height: min-content;
	}
	.date {
		font: $h6-medium;
		color: white;
		max-width: 104px;
		text-align: center;
	}
	.table-container {
		overflow-x: auto;
		padding: 3px 15px 4px 15px;
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
		color: white;
	}
	.title {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: $bg-gray;
		border-bottom: 1px solid black;
		font: normal 400 12px/140% "Noto Sans", sans-serif;
		height: 23px;
	}
	.title#empty {
		grid-column: span 6;
		border-right: 1px solid black;
		border-collapse: collapse;
	}
	.title#handicap {
		grid-column: span 3;
		border-right: 1px solid black;
	}
	.title#total {
		grid-column: span 3;
		border-right: 1px solid black;
	}
	.first-row {
		height: 23px;
		background: $bg-gray;
		font: normal 600 13px/140% "Inter", sans-serif;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	:nth-last-child(1 of .first-row) {
		border-right: none;
	}
	.second-row {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 46px;
		padding: 0 5.5px;
		border-right: 1px solid black;
		background: rgb(66, 67, 72);
		font: normal 400 13px/120% "Noto Sans", sans-serif;
	}
	:nth-last-child(1 of .second-row) {
		border-right: none;
	}
</style>
