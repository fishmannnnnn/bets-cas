<template>
	<div class="page">
		<SearchPopup v-if="showSearchPopup" @close="handleClose" />
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="page-content">
			<div class="page-content__header">
				<div class="gradient-bg">
					<div class="gradient"></div>
				</div>
				<div class="header__tabs">
					<template v-for="item of tabList" :key="item.id">
						<div
							:class="[
								'tab',
								currentTab == item.id ? 'tab-active' : '',
							]"
							:id="item.id"
							@click="setCurrentTab($event)">
							{{ item.name }}
						</div>
					</template>
				</div>

				<div class="buttons">
					<svg
						@click="showSearchPopup = true"
						width="18"
						height="19"
						viewBox="0 0 18 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.78 17.5008L14.6863 14.4761L14.6138 14.3659C14.479 14.2316 14.2947 14.156 14.1023 14.156C13.9098 14.156 13.7255 14.2316 13.5907 14.3659C10.9615 16.7779 6.91033 16.909 4.1238 14.6722C1.33728 12.4355 0.680102 8.52491 2.58812 5.53404C4.49613 2.54316 8.37726 1.40005 11.6576 2.86281C14.9379 4.32557 16.5994 7.94029 15.5403 11.3097C15.464 11.5531 15.5264 11.8178 15.7039 12.0041C15.8813 12.1904 16.147 12.27 16.4007 12.2129C16.6545 12.1557 16.8578 11.9706 16.9341 11.7272C18.2002 7.72866 16.288 3.42568 12.4345 1.60183C8.58104 -0.222012 3.94275 0.980624 1.52015 4.43176C-0.902457 7.88289 -0.382339 12.5468 2.74404 15.4064C5.87041 18.2661 10.6648 18.4632 14.0257 15.8703L16.7649 18.5483C17.0478 18.8237 17.5051 18.8237 17.788 18.5483C18.0707 18.2691 18.0707 17.8194 17.788 17.5401L17.78 17.5008Z"
							fill="white" />
					</svg>
					<svg
						width="21"
						height="20"
						viewBox="0 0 21 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.80473 0.895828C9.079 0.344896 9.64238 0 10.255 0C10.8677 0 11.4311 0.344897 11.7053 0.895828L13.997 5.49918L19.1246 6.24231C19.7311 6.3302 20.2391 6.75267 20.4305 7.33804C20.6222 7.92414 20.4609 8.56601 20.0185 8.99334L16.3133 12.5716L17.1875 17.6252C17.2926 18.2331 17.0399 18.8448 16.5412 19.2041C16.0433 19.5627 15.3849 19.6095 14.8412 19.326L10.255 16.9346L5.66884 19.326C5.1252 19.6095 4.46677 19.5627 3.96893 19.2041C3.47014 18.8448 3.21747 18.2331 3.32262 17.6252L4.19677 12.5716L0.491627 8.99335C0.0491412 8.56601 -0.112092 7.92414 0.0795653 7.33804C0.270987 6.75267 0.779024 6.3302 1.3855 6.24231L6.51308 5.49918L8.80473 0.895828ZM10.255 1.51C10.2103 1.51 10.1732 1.53516 10.1565 1.56876L7.68861 6.52612C7.57824 6.74784 7.36614 6.90132 7.12102 6.93684L1.60208 7.7367C1.55814 7.74306 1.5261 7.77275 1.51478 7.80737C1.50369 7.84127 1.5122 7.87975 1.5406 7.90718L5.53336 11.7632C5.71327 11.937 5.79546 12.1885 5.75283 12.435L4.81053 17.8826C4.80453 17.9173 4.81829 17.955 4.85146 17.9789L4.41019 18.5915L4.85147 17.9789C4.88558 18.0034 4.93238 18.0071 4.97068 17.9871L9.90596 15.4137C10.1247 15.2996 10.3854 15.2996 10.6041 15.4137L15.5394 17.9871C15.5777 18.0071 15.6245 18.0034 15.6586 17.9789L15.9844 18.4311L15.6586 17.9789C15.6918 17.955 15.7056 17.9173 15.6996 17.8826L14.7573 12.435C14.7146 12.1885 14.7968 11.937 14.9767 11.7632L18.9695 7.90718C18.9979 7.87976 19.0064 7.84127 18.9953 7.80737C18.984 7.77275 18.9519 7.74306 18.908 7.7367L13.3891 6.93684C13.1439 6.90132 12.9318 6.74784 12.8215 6.52612L10.3536 1.56876C10.3369 1.53516 10.2998 1.51 10.255 1.51Z"
							fill="white" />
					</svg>
					<svg
						@click="showOptions = true"
						width="5"
						height="19"
						viewBox="0 0 5 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle cx="2.51025" cy="2.75488" r="2" fill="white" />
						<circle cx="2.51025" cy="9.75488" r="2" fill="white" />
						<circle cx="2.51025" cy="16.7549" r="2" fill="white" />
					</svg>
				</div>
				<div
					class="options-container"
					v-if="showOptions"
					ref="optionsRef">
					<div class="options-bg">
						<div class="options" id="options">
							<div class="option-name">Calculator</div>
							<div class="option-name">Results</div>
							<div class="option-name">Setting</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-1'">
				<div class="time-periods-container">
					<div class="time-periods">
						<div
							class="time-period"
							id="6h"
							@click="setActivePeriod($event)">
							<TimePeriod
								text="6 hours"
								:type="
									activePeriodItem == '6h'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="12h"
							@click="setActivePeriod($event)">
							<TimePeriod
								text="12 hours"
								:type="
									activePeriodItem == '12h'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="24h"
							@click="setActivePeriod($event)">
							<TimePeriod
								text="24 hours"
								:type="
									activePeriodItem == '24h'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="3d"
							@click="setActivePeriod($event)">
							<TimePeriod
								text="3 days"
								:type="
									activePeriodItem == '3d'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="all"
							@click="setActivePeriod($event)">
							<TimePeriod
								text="All"
								flag="all"
								:type="
									activePeriodItem == 'all'
										? 'active'
										: 'inactive'
								" />
						</div>
					</div>
				</div>
				<swiper-container
					id="sports-circles"
					mousewheel-force-to-axis="true"
					space-between="14px"
					slides-per-view="auto"
					free-mode="true">
					<swiper-slide>
						<div
							id="popular-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'popular-circle'
										? true
										: false
								"
								title="Popular"
								activeColor="yellow">
								<img
									class="item__circle"
									id="popular"
									src="@/assets/circles/popular.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="football-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'football-circle'
										? true
										: false
								"
								title="Football"
								activeColor="green">
								<img
									class="item__circle"
									src="@/assets/circles/football.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="basketball-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'basketball-circle'
										? true
										: false
								"
								title="Basketball"
								activeColor="brown">
								<img
									class="item__circle"
									src="@/assets/circles/basketball.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="tennis-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'tennis-circle'
										? true
										: false
								"
								title="Tennis"
								activeColor="red">
								<img
									class="item__circle"
									src="@/assets/circles/tennis.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="baseball-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'baseball-circle'
										? true
										: false
								"
								title="Baseball"
								activeColor="green">
								<img
									class="item__circle"
									src="@/assets/circles/baseball.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="boxing-circle"
							@click="setActiveCircle($event)">
							<CategoryCircle
								:isActive="
									activeCircle == 'boxing-circle'
										? true
										: false
								"
								title="Boxing"
								activeColor="purple">
								<img
									class="item__circle"
									id="boxing"
									src="@/assets/circles/boxing.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
				</swiper-container>
				<div class="categories">
					<div class="category" v-for="(item, index) in dataPrematch">
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
			</div>
			<div class="content" v-if="currentTab == 'tab-2'">
				<div class="time-periods-container">
					<div class="time-periods">
						<div
							class="time-period"
							id="all"
							@click="setActivePeriodLive($event)">
							<TimePeriod
								text="All"
								flag="all"
								:type="
									activePeriodLiveItem == 'all'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="center"
							@click="setActivePeriodLive($event)">
							<TimePeriod
								text="With Match center"
								:type="
									activePeriodLiveItem == 'center'
										? 'active'
										: 'inactive'
								" />
						</div>
						<div
							class="time-period"
							id="tv"
							@click="setActivePeriodLive($event)">
							<TimePeriod
								text="With Match TV"
								:type="
									activePeriodLiveItem == 'tv'
										? 'active'
										: 'inactive'
								" />
						</div>
					</div>
				</div>
				<swiper-container
					id="sports-circles"
					mousewheel-force-to-axis="true"
					space-between="14px"
					slides-per-view="auto"
					free-mode="true">
					<swiper-slide>
						<div
							id="all-events-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="activeCircleLive == 'all-events-circle'
										? true
										: false"
								title="All events"
								activeColor="yellow">
								<img
								class="item__circle"
								id="all-events"
								src="@/assets/circles/all-events.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="football-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="
									activeCircleLive == 'football-circle'
										? true
										: false
								"
								title="Football"
								activeColor="green">
								<img
									class="item__circle"
									src="@/assets/circles/football.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="basketball-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="
									activeCircleLive == 'basketball-circle'
										? true
										: false
								"
								title="Basketball"
								activeColor="brown">
								<img
									class="item__circle"
									src="@/assets/circles/basketball.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="tennis-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="
									activeCircleLive == 'tennis-circle'
										? true
										: false
								"
								title="Tennis"
								activeColor="red">
								<img
									class="item__circle"
									src="@/assets/circles/tennis.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="baseball-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="
									activeCircleLive == 'baseball-circle'
										? true
										: false
								"
								title="Baseball"
								activeColor="green">
								<img
									class="item__circle"
									src="@/assets/circles/baseball.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div
							id="boxing-circle"
							@click="setActiveCircleLive($event)">
							<CategoryCircle
								:isActive="
									activeCircleLive == 'boxing-circle'
										? true
										: false
								"
								title="Boxing"
								activeColor="purple">
								<img
									class="item__circle"
									id="boxing"
									src="@/assets/circles/boxing.png" />
							</CategoryCircle>
						</div>
					</swiper-slide>
				</swiper-container>
				<div
					class="content"
					id="football-matches"
					v-if="
						activeCircleLive == 'all-events-circle' ||
						activeCircleLive == 'football-circle'
					">
					<div class="event-container">
						<ColoredEvent color="green">
							<img
								src="@/assets/events-icons/football.png"
								class="sport-img-football" />
							<div class="sport">Football</div>
						</ColoredEvent>
					</div>
					<div class="accordion">
						<div class="accordion-content">
							<template v-for="data in filterSport('football')">
								<div
									class="accordion-item"
									@click="
										setActiveAccordionItem(
											$event,
											activeAccordionAllItems
										)
									"
									:id="data.id">
									<div class="container-left">
										<img
											class="accordion-item__img"
											:src="getImageUrl(data.imgName)"
											alt="" />
										<div class="accordion-item__league">
											{{ data.league }}
										</div>
									</div>
									<svg
										:class="[
											activeAccordionAllItems[data.id] ==
											true
												? 'chevron-up'
												: 'chevron-down',
										]"
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
								<div
									class="accordion-item__tables"
									v-if="
										activeAccordionAllItems[data.id] == true
									">
									<template
										v-for="tableData in data.tableData">
										<SportCategoryTableLive
											:data="tableData" />
									</template>
								</div>
							</template>
						</div>
					</div>
				</div>
				<div
					class="content"
					id="hockey-matches"
					v-if="
						activeCircleLive == 'all-events-circle' ||
						activeCircleLive == 'hockey-circle'
					">
					<div class="event-container">
						<ColoredEvent color="blue">
							<img
								src="@/assets/events-icons/hockey.png"
								class="sport-img-hockey" />
							<div class="sport">Hockey</div>
						</ColoredEvent>
					</div>
					<div class="accordion">
						<div class="accordion-content">
							<template v-for="data in filterSport('hockey')">
								<div
									class="accordion-item"
									@click="
										setActiveAccordionItem(
											$event,
											activeAccordionAllItems
										)
									"
									:id="data.id">
									<div class="container-left">
										<img
											class="accordion-item__img-hockey"
											:src="getImageUrl(data.imgName)" />
										<div class="accordion-item__league">
											{{ data.league }}
										</div>
									</div>
									<svg
										:class="[
											activeAccordionAllItems[data.id] ==
											true
												? 'chevron-up'
												: 'chevron-down',
										]"
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
								<div
									class="accordion-item__tables"
									v-if="
										activeAccordionAllItems[data.id] == true
									">
									<template
										v-for="tableData in data.tableData">
										<SportCategoryTableLive
											:data="tableData" />
									</template>
								</div>
							</template>
						</div>
					</div>
				</div>
				<div
					class="content"
					id="basketball-matches"
					v-if="activeCircleLive == 'basketball-circle'">
					basketball
				</div>
				<div
					class="content"
					id="tennis-matches"
					v-if="activeCircleLive == 'tennis-circle'">
					tennis
				</div>
				<div
					class="content"
					id="baseball-matches"
					v-if="activeCircleLive == 'baseball-circle'">
					baseball
				</div>
				<div
					class="content"
					id="boxing-matches"
					v-if="activeCircleLive == 'boxing-circle'">
					boxing
				</div>
			</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu />
		</div>
	</div>
</template>

<script setup>
	import { ref, reactive } from "vue";
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
	import HeadUnregistered from "@/components/layout/head/HeadUnregistered.vue";
	import TimePeriod from "@/components/layout/buttons/TimePeriod.vue";
	import SportCategory from "@/components/layout/events/SportCategory.vue";
	import SportCategoryTable from "@/components/layout/events/SportCategoryTable.vue";
	import SportCategoryTableLive from "@/components/layout/events/SportCategoryTableLive.vue";
	import SearchPopup from "@/components/layout/popups/SearchPopup.vue";
	import ColoredEvent from '@/components/layout/events/ColoredEvent.vue';
	import CategoryCircle from '@/components/layout/events/CategoryCircle.vue';
	import { onClickOutside } from "@vueuse/core";
	import { register } from "swiper/element/bundle";
	register();

	const activePeriodItem = ref("all");
	const setActivePeriod = (event) => {
		activePeriodItem.value = event.currentTarget.id;
	};
	const activePeriodLiveItem = ref("all");
	const setActivePeriodLive = (event) => {
		activePeriodLiveItem.value = event.currentTarget.id;
	};
	const activeCircle = ref("popular-circle");
	const setActiveCircle = (event) => {
		activeCircle.value = event.currentTarget.id;
	};
	const activeCircleLive = ref("all-events-circle");
	const setActiveCircleLive = (event) => {
		activeCircleLive.value = event.currentTarget.id;
	};

	const activeAccordionAllItems = reactive({
		"football-001": false,
		"football-002": false,
		"football-003": false,
		"football-004": false,
		"football-005": false,
		"football-006": false,
		"football-007": false,
		"football-008": false,
		"hockey-001": true,
	});

	const setActiveAccordionItem = (event, o) => {
		if (o[event.currentTarget.id] == true) {
			o[event.currentTarget.id] = false;
			return;
		}

		o[event.currentTarget.id] = true;
	};

	const showSearchPopup = ref(false);
	const handleClose = (newValue) => {
		showSearchPopup.value = newValue;
	};
	const showOptions = ref(false);
	const optionsRef = ref(null);
	const handleOptionsClose = () => {
		showOptions.value = false;
	};
	onClickOutside(optionsRef, handleOptionsClose);

	const currentTab = ref("tab-1");
	const setCurrentTab = (event) => {
		currentTab.value = event.currentTarget.id;
	};
	const tabList = [
		{ id: "tab-1", name: "Pre-match" },
		{ id: "tab-2", name: "Live" },
	];
	const getImageUrl = (name) =>
		new URL(`/src/assets/events-icons/${name}.png`, import.meta.url).href;

	const dataPrematch = [
		{
			sport: "Football",
			imgName: "football",
			league: "Italy Premier A",
			shadowColor: "green",
			tableData: {
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
			sport: "Football",
			imgName: "football",
			league: "England. Premier league",
			shadowColor: "green",
			tableData: {
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
			sport: "Tennis",
			imgName: "tennis",
			league: "Italy Premier A Italy Premier A",
			shadowColor: "red",
			tableData: {
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
			sport: "Basketball",
			imgName: "basketball",
			league: "ITF",
			shadowColor: "yellow",
			tableData: {
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
			sport: "Hockey",
			imgName: "hockey",
			league: "NHL",
			shadowColor: "blue",
			tableData: {
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
			sport: "Football",
			imgName: "football",
			league: "Italy Premier A",
			shadowColor: "green",
			tableData: {
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
			sport: "Football",
			imgName: "football",
			league: "England. Premier league",
			shadowColor: "green",
			tableData: {
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

	const dataLiveAll = [
		{
			league: "Italy Premier A Italy Premier A",
			imgName: "football",
			id: "football-001",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: true,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: true,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Australia Champions League B",
			imgName: "football",
			id: "football-002",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: false,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Italy Premier A Italy Premier A",
			imgName: "football",
			id: "football-003",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: true,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: true,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Australia Champions League B",
			imgName: "football",
			id: "football-004",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: false,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Italy Premier A Italy Premier A",
			imgName: "football",
			id: "football-005",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: true,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: true,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Australia Champions League B",
			imgName: "football",
			id: "football-006",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: false,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Italy Premier A Italy Premier A",
			imgName: "football",
			id: "football-007",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: true,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: true,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Australia Champions League B",
			imgName: "football",
			id: "football-008",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: false,
					hasInfo: false,
					hasField: false,
					hasStatistics: false,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "red",
					accentField: "3",
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
			],
		},
		{
			league: "Australia Champions League B",
			imgName: "hockey",
			id: "hockey-001",
			tableData: [
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: false,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
				{
					id: 12345,
					teams: ["Primer Unitet", "Carlos Alcaraz"],
					score: "2:1 (2:2)",
					time: "25",
					hasLive: true,
					hasInfo: true,
					hasField: true,
					hasStatistics: true,
					hasBreak: false,
					accentColor: "green",
					accentField: "2",
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
			],
		},
	];

	const filterSport = (sport) =>
		dataLiveAll.filter((dataItem) => dataItem.imgName === sport);
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.page {
		background: #080e13;
		height: 100%;
		min-height: 100dvh;
		padding-bottom: 91px;
	}
	.page-content {
		position: relative;
		z-index: 2;
		margin-top: 15px;
	}
	.page-content__header {
		display: flex;
		justify-content: space-between;
		padding: 0 19px 0 7px;
		align-items: center;
		position: relative;
	}
	.header__tabs {
		display: flex;
	}
	.tab {
		font: $h5-medium;
		color: white;
		margin-left: 4px;
		padding: 10px 15px 12px;
	}
	.tab-active {
		color: $gold-accent;
		border: 1px solid #505561;
		border-bottom: none;
		border-radius: 6px 6px 0 0;
		background: #2f3035;
		position: relative;
		box-shadow: 0 2px 0 rgba(47, 48, 53, 1);
	}
	.tab-active::before,
	.tab-active::after {
		position: absolute;
		bottom: 0px;
		width: 20px;
		height: 20px;
		content: " ";
		border: 1px solid rgba(80, 85, 97, 1);
	}
	.tab-active::before {
		left: -20px;
		border-bottom-right-radius: 12px;
		border-width: 0 1px 1px 0;
		box-shadow: 1px 9px 0 rgba(47, 48, 53, 1);
	}
	.tab-active::after {
		right: -20px;
		border-bottom-left-radius: 12px;
		border-width: 0 0 1px 1px;
		box-shadow: -1px 9px 0 rgba(47, 48, 53, 1);
	}
	.tab:first-of-type {
		margin-left: 0;
	}
	.buttons {
		display: flex;
		width: 100%;
		max-width: 81px;
		justify-content: space-between;
	}
	.gradient-bg {
		position: absolute;
		top: 38.5px;
		left: 0;
		width: 100%;
		height: 333px;
		background: linear-gradient(
			180deg,
			rgba(80, 85, 97, 1) 0%,
			rgba(8, 14, 19, 1) 100%
		);
		padding: 1px 0;
		z-index: -1;
	}
	.gradient {
		height: 100%;
		background: linear-gradient(
			180deg,
			rgba(47, 48, 53, 1) 0%,
			rgba(8, 14, 19, 1) 71%
		);
	}
	.time-periods-container {
		overflow-x: auto;
	}
	.time-periods {
		padding: 20px 15px 0;
		width: max-content;
		display: flex;
		gap: 4px;
		flex-shrink: 0;
	}
	.time-period {
		flex-shrink: 0;
	}
	#sports-circles {
		padding: 18px 15px 20px;
		display: flex;
		overflow-x: scroll;
		gap: 14px;
		swiper-slide {
			width: fit-content;
			max-width: 100%;
		}
	}
	.sports-circles__item {
		flex-shrink: 0;
		width: fit-content;
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
			128deg,
			rgba(158, 165, 182, 1) 5%,
			rgba(64, 65, 71, 1) 55%,
			rgba(254, 180, 36, 1) 100%
		);
		box-shadow: 2px 2px 6px 0 rgba(255, 163, 79, 0.5);
		padding: 1px;
	}
	.circle {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			329deg,
			rgba(26, 27, 31, 1) 0%,
			rgba(101, 103, 111, 1) 100%
		);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.22);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.circle-bg-inactive {
		border-radius: 200px;
		width: 52px;
		height: 52px;
		background: linear-gradient(
			128deg,
			rgba(158, 165, 182, 1) 5%,
			rgba(64, 65, 71, 1) 55%,
			rgba(254, 180, 36, 1) 100%
		);
		box-shadow: 2px 2px 6px 0 rgba(255, 163, 79, 0.5);
		padding: 1px;
	}
	.circle-inactive {
		border-radius: 200px;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			329deg,
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
	.popular-circle-bg-active {
		background: $accent-stroke-gold-gradient;
	}
	.popular-circle-active {
		background: $accent-gold-gradient;
	}
	.football-circle-bg-active {
		background: linear-gradient(128deg, #37580e 0%, #8fd931 100%);
		box-shadow: 2px 2px 6px 0 rgba(143, 217, 49, 0.5);
	}
	.football-circle-active {
		background: linear-gradient(329deg, #35550c 0%, #8dd630 100%);
		box-shadow: inset 0 3px 4px 0 rgba(255, 255, 255, 0.2);
	}
	#popular {
		width: 26px;
		height: 25px;
	}
	#boxing {
		width: 34px;
		height: 34px;
	}
	.sports-circles__item-title {
		font: normal 400 12px/120% "Noto Sans", sans-serif;
		color: white;
	}
	.categories {
		padding-top: 5px;
	}
	.category {
		padding-bottom: 8px;
	}
	.content {
		color: white;
	}
	.options-container {
		position: absolute;
		top: 35px;
		right: 15px;
		z-index: 10;
	}
	.options-bg {
		border-radius: 4px;
		padding: 1px;
		height: 110px;
		width: 100px;
		background: linear-gradient(
			135deg,
			#feb424 0%,
			rgba(255, 255, 255, 0.21) 34%,
			rgba(255, 255, 255, 0.22) 68%,
			#feb424 100%
		);
	}
	.options {
		width: 100%;
		height: 100%;
		padding: 15px 11px;
		border-radius: 3px;
		backdrop-filter: blur(19px);
		background: rgba(0, 0, 0, 0.8);
		color: white;
		font: $h4-regular;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.accordion {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.accordion-item {
		margin: 0 15px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.container-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.accordion-item__img {
		width: 24px;
		height: 24px;
	}
	.accordion-item__img-hockey {
		width: 31px;
		height: 24px;
	}
	.chevron-up {
		transform: rotate(180deg);
	}
	.accordion-item__league {
		font: $h2;
		color: white;
	}
	#football-matches {
		padding-bottom: 25px;
	}
	.event-container{
		padding: 0 15px;
	}
	.sport-img-football {
		width: 25px;
		height: 25px;
	}
	.sport-img-hockey {
		width: 31px;
		height: 24px;
	}
</style>
