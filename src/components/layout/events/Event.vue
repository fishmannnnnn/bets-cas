<script setup>
	import Table from "../tables/Table.vue";
	import { ref } from "vue";
	const isComponentOpen = ref(false);
	const onClick = () => {
		isComponentOpen.value = !isComponentOpen.value;
	};
	defineProps({
		competitors: Array,
		date: String,
	});
</script>
<template>
	<div class="event" @click="onClick">
		<div class="event-bg">
			<div class="event-bg__rect-border">
				<div class="event-bg__rect"></div>
			</div>
			<div class="event-bg__right"></div>
			<div class="event__content">
				<div class="left-container">
					<svg
						class="star"
						width="17"
						height="16"
						viewBox="0 0 17 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.5 0C8.79412 0 9.06273 0.16447 9.19291 0.424263L11.401 4.8308L16.339 5.54178C16.63 5.58367 16.8716 5.78463 16.9623 6.06018C17.053 6.33574 16.9771 6.63812 16.7664 6.84023L13.1939 10.2678L14.037 15.1101C14.0868 15.3957 13.9676 15.6844 13.7296 15.8547C13.4916 16.025 13.1761 16.0474 12.9158 15.9125L8.5 13.625L4.08422 15.9125C3.82388 16.0474 3.50838 16.025 3.2704 15.8547C3.03242 15.6844 2.91323 15.3957 2.96295 15.1101L3.80606 10.2678L0.233592 6.84023C0.0229331 6.63812 -0.0530048 6.33574 0.0376959 6.06018C0.128397 5.78463 0.370012 5.58367 0.66099 5.54178L5.59899 4.8308L7.80709 0.424263C7.93727 0.16447 8.20589 0 8.5 0Z"
							fill="#5E6471" />
					</svg>
					<div class="competitors">
						<div class="competitor">{{ competitors[0] }}</div>
						<div class="competitor">{{ competitors[1] }}</div>
					</div>
				</div>
				<div class="right-container">
					<div class="date">{{ date }}</div>
					<svg
						v-if="isComponentOpen"
						class="arrow"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						transform="matrix(1,0,0,-1,0,0)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5 3.93934L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
							fill="#F5AD22"></path>
					</svg>
					<svg
						v-else
						class="arrow"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5 3.93934L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
							fill="#F5AD22" />
					</svg>
				</div>
			</div>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
	<div :class="['table-content', isComponentOpen ? 'table-visible' : '']">
		<Table></Table>
	</div>
</template>

<style lang="scss" scoped>
	@import "@/styles/global";
	.event {
		padding-right: 15px;
		height: 53px;
		position: relative;
		filter: drop-shadow(0px 4px 2px black);
	}
	.event-bg {
		position: relative;
		width: calc(100%);
		overflow: hidden;
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
	.event__content {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 30;
		width: 100%;
		height: 100%;
		padding: 8px 15px 8px 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font: $h5-regular;
		color: white;
	}
	.star{
		flex-shrink: 0;
	}
	.left-container {
		display: flex;
		align-items: center;
		flex-shrink: 1;
		min-width: 90px;
	}
	.competitors {
		margin-left: 5px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.competitor {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.date {
		width: 105px;
		font: $h6-medium;
		margin-right: 19px;
		text-align: center;
	}
	.right-container {
		display: flex;
		align-items: center;
	}
	.arrow{
		min-width: 10px;
	}
	.content {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-30%, -40%);
		z-index: 30;
	}
	.table-content {
		display: none;
		margin-top: 4px;
		overflow-x: scroll;
	}
	.table-visible {
		display: block;
	}
</style>
