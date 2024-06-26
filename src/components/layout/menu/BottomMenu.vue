<script setup>
	import { ref } from "vue";
	import Badge from "../badges/Badge.vue";
	// import BetsScreen from "@/views/coupon/BetsScreen.vue";
	// import BetsBlankScreen from "@/views/coupon/BetsBlankScreen.vue";
	// import BetsBlank2Screen from "@/views/coupon/BetsBlank2Screen.vue";
	// import BetsMultiBonusScreen from "@/views/coupon/BetsMultiBonusScreen.vue";
	// import BetsSingleAlertScreen from "@/views/coupon/BetsSingleAlertScreen.vue";
	// import BetsCoefRed from "@/views/coupon/BetsCoefRed.vue";
	// import BetsCoefChanged from "@/views/coupon/BetsCoefChanged.vue";
	// import BetsCoefBlocked from "@/views/coupon/BetsCoefBlocked.vue";
	const props = defineProps({
		counter: String,
		betsVariant: String,
	});

	const showBets = ref(false);
	if (props.betsVariant != null) showBets.value = true;

	// const setShowBets = (value) => {
	// 	value
	// 		? document.body.classList.add("body-fixed")
	// 		: document.body.classList.remove("body-fixed");
	// 	showBets.value = value;
	// };
</script>
<template>
	<!-- <div
		:class="showBets ? 'bets-container-bg' : ''"
		v-if="betsVariant == undefined || betsVariant == 1">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsScreen @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 2">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsBlankScreen @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 3">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsBlank2Screen @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 4">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsMultiBonusScreen @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 5">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsSingleAlertScreen @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 6">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsCoefRed @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 7">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsCoefChanged @close="setShowBets" />
			</div>
		</Transition>
	</div>
	<div :class="showBets ? 'bets-container-bg' : ''" v-if="betsVariant == 8">
		<Transition name="ontop" appear>
			<div class="bets-container" v-if="showBets">
				<BetsCoefBlocked @close="setShowBets" />
			</div>
		</Transition>
	</div> -->
	<div class="bottom-menu">
		<div class="bottom-menu__container">
			<div class="menu__item" id="prematch">
				<img src="@/assets/bottom-menu/prematch.svg" />
				<h6 class="item__title active">Pre-match</h6>
			</div>
			<div class="menu__item" id="live">
				<img src="@/assets/bottom-menu/live.svg" />
				<h6 class="item__title">Live</h6>
			</div>
			<div class="menu__item" id="bets" @click="setShowBets(true)">
				<img src="@/assets/bottom-menu/bets.svg" />
				<h6 class="item__title">Bets</h6>
				<div class="item-container">
					<Badge v-if="counter" :count="counter" />
				</div>
			</div>
			<div class="menu__item" id="games">
				<img src="@/assets/bottom-menu/games.svg" />
				<h6 class="item__title">Games</h6>
			</div>
			<div class="menu__item" id="deposits">
				<img src="@/assets/bottom-menu/deposits.svg" />
				<h6 class="item__title">Deposits</h6>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "@/styles/global";
	.bets-container-bg {
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(9px);
		z-index: 10000;
	}
	.bets-container {
		position: absolute;
		z-index: 10000000;
		bottom: 0;
		left: 0;
		height: fit-content;
		width: 100%;
	}
	.bottom-menu {
		position: relative;
		z-index: 8000;
		width: 100%;
		height: 71px;
		background: $bg-gray;
		padding: 10px 22px 17px;
	}
	.bottom-menu__container {
		position: relative;
		z-index: 8000;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.menu__item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.item-container {
		position: absolute;
		top: -5px;
		right: 0;
		transform: translateX(37%);
	}
	#prematch {
		.item__title {
			margin-top: 5px;
		}
	}
	#live {
		.item__title {
			margin-top: 5px;
		}
	}
	#bets {
		.item__title {
			margin-top: 5px;
		}
	}
	#games {
		.item__title {
			margin-top: 4px;
		}
	}
	#deposits {
		.item__title {
			margin-top: 4px;
		}
	}
	.item__title {
		font: $h6-regular;
		color: $gray-text;
	}
	.active {
		color: $gold-accent;
	}
</style>
