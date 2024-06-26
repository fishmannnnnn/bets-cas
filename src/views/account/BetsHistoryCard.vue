<template>
	<div class="card-bg">
		<div class="card">
			<div class="card__top" @click="showMore = !showMore">
				<div class="data-container">
					<div class="data">
						<span class="coupon-title">Coupon ID</span>{{ data.id }}
					</div>
					<div class="data">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.6667 2.66797H3.33333C2.59695 2.66797 2 3.26492 2 4.0013V13.3346C2 14.071 2.59695 14.668 3.33333 14.668H12.6667C13.403 14.668 14 14.071 14 13.3346V4.0013C14 3.26492 13.403 2.66797 12.6667 2.66797Z"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M10.666 1.33203V3.9987"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M5.33398 1.33203V3.9987"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M2 6.66797H14"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<div class="data__date">
							{{ data.date }}
						</div>
						<div class="data__time">
							{{ data.time }}
						</div>
					</div>
				</div>
				<div class="chevron-btn">
					<svg
						:class="{ 'chevron-down': showMore }"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 1L5 5L9 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</div>
			</div>
			<div class="content">
				<div class="info">
					<div class="type">
						<span class="info-title">Type:</span> {{ data.type }}
					</div>
					<div class="total-odds">
						<span class="info-title">Total Odds:</span>
						{{ data.totalOdds }}
					</div>
					<div class="stake">
						<span class="info-title">Your stake:</span>
						{{ data.stake }}
					</div>
					<div
						:class="
							resultStyles[data.result] || resultStyles.default
						">
						<span class="info-title">Result:</span>
						{{ data.result }}
					</div>
				</div>
				<div class="winnings">
					<span class="info-title">Your winnings:</span
					><span
						class="result-green"
						v-if="
							data.result != 'Not calculated' &&
							data.result != 'Lose'
						"
						>{{ Math.trunc(data.winningAmount) }}</span
					>
				</div>
				<div class="events" v-if="showMore">
					<div class="event" v-for="(item, _i) in data.events">
						<div class="event-left">
							<div class="team">{{ item.teams[0] }}</div>
							<div class="team">{{ item.teams[1] }}</div>
							<div class="event-date">{{ item.date }}</div>
						</div>
						<div class="event-right">
							<div class="coef">{{ item.coefName }}</div>
							<div class="coef">{{ item.coef }}</div>
						</div>
					</div>
				</div>
				<div class="bet-result" v-if="showMore">
					<div class="bet">
						Your bet
						<span class="bet-amount">{{ data.betAmount }}</span>
						USDT
					</div>
					<svg
						v-if="data.result != 'Not calculated'"
						:class="
							data.winningAmount > 0 ? 'arrow-green' : 'arrow-red'
						"
						width="32"
						height="12"
						viewBox="0 0 32 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M31.0303 6.53033C31.3232 6.23744 31.3232 5.76256 31.0303 5.46967L26.2574 0.696699C25.9645 0.403806 25.4896 0.403806 25.1967 0.696699C24.9038 0.989593 24.9038 1.46447 25.1967 1.75736L29.4393 6L25.1967 10.2426C24.9038 10.5355 24.9038 11.0104 25.1967 11.3033C25.4896 11.5962 25.9645 11.5962 26.2574 11.3033L31.0303 6.53033ZM0.5 6.75H30.5V5.25H0.5V6.75Z" />
					</svg>
					<div
						class="bet"
						v-if="data.result != 'Not calculated'"
						:style="`color: ${
							data.winningAmount > 0 ? '#10DC70' : '#FF253C'
						}`">
						<span
							class="bet-amount"
							:style="`color: ${
								data.winningAmount > 0 ? '#00FC77' : '#FF253C'
							}`"
							>{{ data.winningAmount }}</span
						>
						USDT
					</div>
						<ButtonHead text="Sell" type="secondary" v-if="data.result == 'Not calculated'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import ButtonHead from "@/components/layout/buttons/ButtonHead.vue";
	defineProps({
		data: Object,
	});
	const showMore = ref(true);
	const resultStyles = {
		"Not calculated": "result-yellow",
		Lose: "result-red",
		Win: "result-green",
		default: "result-default",
	};
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.card-bg {
		border-radius: 4px;
		width: 100%;
		padding: 1px;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
	}
	.card {
		border-radius: 3px;
		background: $bg-gray;
	}
	.card__top {
		padding: 8px 7px 0 9px;
		display: flex;
		justify-content: space-between;
	}
	.data-container {
		display: flex;
		gap: 8px;
		font: $h6-medium;
		flex-wrap: wrap;
	}
	.coupon-title {
		font: $h6-medium;
		color: $gray-text;
		margin-right: 2px;
	}
	.data {
		background: $bg-black;
		padding: 4px 6px;
		width: fit-content;
		border-radius: 2px;
		display: flex;
		align-items: center;
	}
	.data__date {
		margin-left: 2px;
	}
	.data__time {
		margin-left: 4px;
	}
	.chevron-btn {
		background: $bg-black;
		padding: 9px 7px;
		width: fit-content;
		height: fit-content;
		border-radius: 2px;
	}
	.content {
		padding: 12px 10px 5px;
	}
	.info {
		padding: 0 2px 10px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px 0;
		font: $h5-regular;
	}
	.info-title {
		font: $h5-regular;
		margin-right: 6px;
		color: $gray-text;
	}
	.result-yellow {
		color: $gold-accent;
	}
	.result-green {
		color: #10dc70;
		font: $h5-medium;
	}
	.result-red {
		color: #ff1e1e;
		font: $h5-medium;
	}
	.result-default {
		color: #10dc70;
		font: $h6-medium;
	}
	.winnings {
		padding: 8px 2px 10px;
		border-top: 1px solid $separator;
	}
	.events {
		border-top: 1px solid $separator;
	}
	.event {
		padding: 8px 2px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.event-left {
		font: $h5-regular;
	}
	.team {
		padding-top: 4px;
		&:first-of-type {
			padding-top: 0;
		}
	}
	.event-date {
		font: $h7-regular;
		color: $gray-text;
		padding-top: 6px;
	}
	.event-right {
		font: $h6-regular;
	}
	.coef {
		text-align: right;
		padding-top: 2px;
		&:first-of-type {
			padding-top: 0;
		}
	}
	.bet-result {
		border-top: 1px solid $separator;
		padding: 12px 2px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.bet {
		font: $h6-medium;
	}
	.bet-amount {
		font: $h3;
		padding: 0 4px 0 6px;
	}
	.arrow-red {
		fill: #ff253c;
	}
	.arrow-green {
		fill: #00fc77;
	}
</style>
