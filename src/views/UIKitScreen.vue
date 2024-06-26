<script setup>
	import { ref } from 'vue';
	import ButtonHead from '@/components/layout/buttons/ButtonHead.vue';
	import ButtonSmall from '@/components/layout/buttons/ButtonSmall.vue';
	import ButtonMedium from '@/components/layout/buttons/ButtonMedium.vue';
	import ButtonLarge from '@/components/layout/buttons/ButtonLarge.vue';
	import Badge from '@/components/layout/badges/Badge.vue';
	import BottomMenu from '@/components/layout/menu/BottomMenu.vue';
	import Search from '@/components/layout/inputs/Search.vue';
	import Tooltip from '@/components/layout/tooltips/Tooltip.vue';
	import Select from '@/components/layout/inputs/Select.vue';
	import TimePeriod from '@/components/layout/buttons/TimePeriod.vue';
	import Event from '@/components/layout/events/Event.vue';
	import SportCategory from '@/components/layout/events/SportCategory.vue';
	import SportCategoryTable from '@/components/layout/events/SportCategoryTable.vue';
	import TotalsPopup from '@/components/layout/popups/TotalsPopup.vue';
	import HandicapPopup from '@/components/layout/popups/HandicapPopup.vue';
	import { useToast } from 'vue-toastification';
	import ColoredEvent from '@/components/layout/events/ColoredEvent.vue';
	import CategoryCircle from '@/components/layout/events/CategoryCircle.vue';
	const toast = useToast();
	const currency = ref('');
	const currencyList = ref(['EUR', 'RUB', 'USD']);

	const showTotalsPopup = ref(false);
	const showHandicapPopup = ref(false);

	const handleCloseTotalsPopup = (newValue) => {
		showTotalsPopup.value = newValue;
	};
	const handleCloseHandicapPopup = (newValue) => {
		showHandicapPopup.value = newValue;
	};
	const Totalsdata = [
		[0.5, 3.5, 3.1],
		[1, 3.5, 3.1],
		[1.5, 3.5, 3.1],
		[2, 3.5, 3.1],
		[2.5, 3.5, 3.1],
		[3, 3.5, 3.1],
		[3.5, 3.5, 3.1],
		[4, 3.5, 3.1],
		[4.5, 3.5, 3.1],
		[5, 3.5, 3.1],
		[5.5, 3.5, 3.1],
	];
	const handicapData = [
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
		[-0.5, 3.5],
	];
	const data = [
		{
			sport: 'Football',
			imgName: 'football',
			league: 'Italy Premier A',
			shadowColor: 'green',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Football',
			imgName: 'football',
			league: 'England. Premier league',
			shadowColor: 'green',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Tennis',
			imgName: 'tennis',
			league: 'Italy Premier A Italy Premier A',
			shadowColor: 'red',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Basketball',
			imgName: 'basketball',
			league: 'ITF',
			shadowColor: 'yellow',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Hockey',
			imgName: 'hockey',
			league: 'NHL',
			shadowColor: 'blue',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Football',
			imgName: 'football',
			league: 'Italy Premier A',
			shadowColor: 'green',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
		{
			sport: 'Football',
			imgName: 'football',
			league: 'England. Premier league',
			shadowColor: 'green',
			tableData: {
				id: 12345,
				teams: ['Primer Unitet', 'Carlos Alcaraz'],
				date: 'Thurs. March 21 21:45',
				table: [
					[
						'W1',
						'X',
						'W2',
						'1X',
						'12',
						'X2',
						'H1',
						'H2',
						'More',
						'TU',
						'TO',
						'More',
						'All',
					],
					[
						'1',
						'1',
						'2.65',
						'3.5',
						'3.5',
						'3.5',
						'(+1.5) 1.85',
						'(+1.5) 1.85',
						'+17',
						'(1.5) 1.85',
						'(1.5) 1.85',
						'+17',
						'+217',
					],
				],
			},
		},
	];
</script>
<template>
	<div class="container">
		<button @click="showTotalsPopup = true">Open Totals Popup</button>
		<TotalsPopup
			v-if="showTotalsPopup"
			@close="handleCloseTotalsPopup"
			:data="Totalsdata" />
		<div class="mt"></div>
		<button @click="showHandicapPopup = true">Open Handicap Popup</button>
		<HandicapPopup
			v-if="showHandicapPopup"
			@close="handleCloseHandicapPopup"
			:data="handicapData" />
		<div class="sports-circles">
			<CategoryCircle
				title="Popular"
				:isActive="false"
				activeColor="yellow">
				<img class="item__circle" src="@/assets/circles/popular.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Popular"
				:isActive="true"
				activeColor="yellow">
				<img class="item__circle" src="@/assets/circles/popular.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="false"
				activeColor="green">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="true"
				activeColor="green">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="false"
				activeColor="blue">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="true"
				activeColor="blue">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="false"
				activeColor="brown">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="true"
				activeColor="brown">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Ski jumping"
				:isActive="false"
				activeColor="red">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Ski jumping"
				:isActive="true"
				activeColor="red">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="false"
				activeColor="purple">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			<CategoryCircle
				title="Football"
				:isActive="true"
				activeColor="purple">
				<img class="item__circle" src="@/assets/circles/football.png" />
			</CategoryCircle>
			
		</div>
		<div class="mt">
			<ColoredEvent color="green">
				<img
					src="@/assets/events-icons/football.png"
					class="sport-img-football" />
				<div class="sport">Football</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<ColoredEvent color="blue">
				<img
					src="@/assets/events-icons/hockey.png"
					class="sport-img-hockey" />
				<div class="sport">Hockey</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<ColoredEvent color="brown">
				<img
					src="@/assets/events-icons/basketball.png"
					class="sport-img-basketball" />
				<div class="sport">Basketball</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<ColoredEvent color="red">
				<img
					src="@/assets/events-icons/tennis.png"
					class="sport-img-tennis" />
				<div class="sport">Tennis</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<ColoredEvent color="purple">
				<img
					src="@/assets/events-icons/tennis.png"
					class="sport-img-tennis" />
				<div class="sport">Tennis</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<ColoredEvent color="gray">
				<img
					src="@/assets/events-icons/tennis.png"
					class="sport-img-tennis" />
				<div class="sport">Tennis</div>
			</ColoredEvent>
		</div>
		<div class="mt">
			<div class="category-container" v-for="(item, index) in data">
				<SportCategory
					:key="index"
					:sport="item.sport"
					:league="item.league"
					:imgName="item.imgName"
					:shadowColor="item.shadowColor">
					<SportCategoryTable :data="item.tableData" />
					<SportCategoryTable :data="item.tableData" />
					<SportCategoryTable :data="item.tableData" />
					<SportCategoryTable :data="item.tableData" />
				</SportCategory>
			</div>
		</div>
		<div class="mt"></div>
		<ButtonHead></ButtonHead>
		<ButtonHead type="secondary"></ButtonHead>
		<button
			@click="
				() =>
					toast('User with this email or phone number was not found ')
			">
			summon toast
		</button>
		<br />
		<ButtonSmall></ButtonSmall>
		<ButtonSmall type="secondary"></ButtonSmall>
		<ButtonSmall type="primary-disabled"></ButtonSmall>
		<ButtonSmall type="secondary-disabled"></ButtonSmall>
		<br />
		<ButtonMedium></ButtonMedium>
		<ButtonMedium type="secondary"></ButtonMedium>
		<ButtonMedium type="primary-disabled"></ButtonMedium>
		<ButtonMedium type="secondary-disabled"></ButtonMedium>
		<br />
		<ButtonLarge className="button" slotClass="button-image">
			<!-- <img src="@/assets/buttons/dollar-premium.svg" /> -->
		</ButtonLarge>
		<div class="btn-cnt">
			<div class="mt"></div>
			<ButtonLarge text="Support 24/7"></ButtonLarge>
			<div class="mt"></div>
			<ButtonLarge type="primary-disabled"></ButtonLarge>
			<div class="mt"></div>
			<ButtonLarge type="secondary" text="Cancel"></ButtonLarge>
			<div class="mt"></div>
			<ButtonLarge type="secondary-disabled"></ButtonLarge>
		</div>
		<BottomMenu></BottomMenu>
		<Badge count="2"></Badge>
		<Badge count="22"></Badge>
		<Badge count="222"></Badge>
		<Search />
		<div class="mt"></div>
		<Tooltip message="User already exists" />
		<div class="mt"></div>
		<Tooltip
			message="Passwords must contain at least B characters, including numbers, uppercase and Latin letters" />
		<div class="mt"></div>
		<Tooltip message="Password mismatch" />

		<div class="currency-select">
			<Select
				placeholder="Select currency"
				:items="currencyList"
				:modelValue="currency"
				@update:modelValue="currency = $event" />
		</div>
		<div class="textb">fgfdgfdgd</div>
		<div class="mt"></div>
		<TimePeriod type="active" text="All" />
		<TimePeriod text="24 hours" />

		<div class="hot-events__wrapper">
			<Event
				:competitors="['Novak Djokovic', 'Carlos Alcaraz']"
				date="Thurs. March 21 21:45">
				<img src="@/assets/images/events/tennis.svg" alt="" />
			</Event>
		</div>
		<div class="hot-events__wrapper">
			<Event
				:competitors="['Novak Djokovic']"
				date="Thurs. March 21 21:45">
			</Event>
		</div>

		<div class="mt"></div>
	</div>
</template>
<style lang="scss" scoped>
	@import '@/styles/global';

	.sport-img-football {
		width: 24px;
		height: 24px;
	}
	.sport-img-hockey {
		width: 28px;
		height: 24px;
	}
	.sport-img-basketball {
		width: 24px;
		height: 24px;
	}
	.sport-img-tennis {
		width: 24px;
		height: 24px;
	}

	.currency-select {
		margin-top: 16px;
		width: 300px;
		height: 46px;
	}
	.hot-events__wrapper {
		padding: 20px 0 0 20px;
	}
	.container {
		width: 100%;
		height: 100%;
	}
	.button-image {
		position: absolute;
		top: -18px;
		right: -9px;
	}
	.btn-cnt {
		width: 100%;
	}
	.mt {
		margin-top: 50px;
	}
	.textb {
		margin-top: 232px;
	}
	.category-container {
		padding-bottom: 8px;
	}

	.sports-circles {
		height: fit-content;
		margin: 18px 0 0 0;
		padding: 0 15px;
		display: flex;
		overflow-x: scroll;
		gap: 14px;
	}
	.sports-circles__item {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
		align-items: center;
	}
	.circle-bg {
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
	}
	.circle {
		border-radius: 200px;
		width: 51px;
		height: 51px;
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
	.item__circle {
		width: 36px;
		height: 36px;
	}
	#boxing {
		width: 34px;
		height: 34px;
	}
	.sports-circles__item-title {
		font: normal 400 12px/120% 'Noto Sans', sans-serif;
		color: white;
	}
</style>
