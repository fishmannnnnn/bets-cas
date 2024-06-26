<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="page-content">
			<div class="header__controls">
				<div class="back">
					<svg
						width="8"
						height="12"
						viewBox="0 0 8 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.5 11L1.5 6L6.5 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<div class="back__title">UEFA champion League</div>
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
			</div>
			<div class="match-info">
				<div class="match-info__teams">
					<div class="team">
						<img src="@/assets/images/match-data-copenhagen.png" />
						<div class="team__title">FC Copenhagen</div>
					</div>
					<div class="separator"></div>
					<div class="team">
						<img src="@/assets/images/match-data-manchester.png" />
						<div class="team__title">Manchester City</div>
					</div>
				</div>
				<div class="info">
					<div class="info__date">
						<div class="date">13.02.2024</div>
						<div class="time">22:00</div>
					</div>
					<div class="info__id-container">
						<div class="info__id">ID 1234567</div>
						<svg
							class="info__stats"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H12.9443V3.55469C12.9443 3.27855 12.7205 3.05469 12.4443 3.05469C12.1682 3.05469 11.9443 3.27855 11.9443 3.55469V15H8.5V8C8.5 7.72386 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.72386 7.5 8V15H4.94434V12.4453C4.94434 12.1692 4.72048 11.9453 4.44434 11.9453C4.16819 11.9453 3.94434 12.1692 3.94434 12.4453V15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
								fill="white" />
						</svg>
						<svg
							class="info__star"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.8" filter="url(#filter0_b_4818_7084)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9 1C9.27681 1 9.52962 1.16447 9.65215 1.42426L11.7304 5.8308L16.3779 6.54178C16.6518 6.58367 16.8792 6.78463 16.9645 7.06018C17.0499 7.33574 16.9784 7.63812 16.7801 7.84023L13.4178 11.2678L14.2113 16.1101C14.2581 16.3957 14.146 16.6844 13.922 16.8547C13.698 17.025 13.4011 17.0474 13.156 16.9125L9 14.625L4.84398 16.9125C4.59895 17.0474 4.30201 17.025 4.07802 16.8547C3.85404 16.6844 3.74186 16.3957 3.78866 16.1101L4.58218 11.2678L1.21985 7.84023C1.02158 7.63812 0.950113 7.33574 1.03548 7.06018C1.12084 6.78463 1.34825 6.58367 1.62211 6.54178L6.26964 5.8308L8.34785 1.42426C8.47038 1.16447 8.72319 1 9 1Z"
									fill="black"
									fill-opacity="0.5" />
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9 1C9.27681 1 9.52962 1.16447 9.65215 1.42426L11.7304 5.8308L16.3779 6.54178C16.6518 6.58367 16.8792 6.78463 16.9645 7.06018C17.0499 7.33574 16.9784 7.63812 16.7801 7.84023L13.4178 11.2678L14.2113 16.1101C14.2581 16.3957 14.146 16.6844 13.922 16.8547C13.698 17.025 13.4011 17.0474 13.156 16.9125L9 14.625L4.84398 16.9125C4.59895 17.0474 4.30201 17.025 4.07802 16.8547C3.85404 16.6844 3.74186 16.3957 3.78866 16.1101L4.58218 11.2678L1.21985 7.84023C1.02158 7.63812 0.950113 7.33574 1.03548 7.06018C1.12084 6.78463 1.34825 6.58367 1.62211 6.54178L6.26964 5.8308L8.34785 1.42426C8.47038 1.16447 8.72319 1 9 1Z"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</g>
							<defs>
								<filter
									id="filter0_b_4818_7084"
									x="-3.5"
									y="-3.5"
									width="25"
									height="25"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB">
									<feFlood
										flood-opacity="0"
										result="BackgroundImageFix" />
									<feGaussianBlur
										in="BackgroundImageFix"
										stdDeviation="2" />
									<feComposite
										in2="SourceAlpha"
										operator="in"
										result="effect1_backgroundBlur_4818_7084" />
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_backgroundBlur_4818_7084"
										result="shape" />
								</filter>
							</defs>
						</svg>
					</div>
				</div>
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
				<div class="gradient-bg">
					<div class="gradient"></div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-1'">
				<div class="content-head">
					<div class="content-head__title">Information</div>
					<div class="content-head__buttons">
						<svg
							width="14"
							height="13"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.4697 7.53032C12.7626 7.82322 13.2374 7.82322 13.5303 7.53032C13.8232 7.23743 13.8232 6.76256 13.5303 6.46966L7.53032 0.469662C7.23743 0.176769 6.76256 0.176769 6.46966 0.469662L0.469663 6.46966C0.176769 6.76255 0.176769 7.23743 0.469663 7.53032C0.762555 7.82321 1.23743 7.82321 1.53032 7.53032L6.99999 2.06065L12.4697 7.53032ZM12.4697 12.5303C12.7626 12.8232 13.2374 12.8232 13.5303 12.5303C13.8232 12.2374 13.8232 11.7626 13.5303 11.4697L7.53032 5.46966C7.23743 5.17677 6.76256 5.17677 6.46966 5.46966L0.469663 11.4697C0.176769 11.7626 0.176769 12.2374 0.469663 12.5303C0.762555 12.8232 1.23743 12.8232 1.53032 12.5303L6.99999 7.06065L12.4697 12.5303Z"
								fill="white" />
						</svg>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17.78 16.7459L14.6863 13.7212L14.6138 13.611C14.479 13.4767 14.2947 13.4011 14.1023 13.4011C13.9098 13.4011 13.7255 13.4767 13.5907 13.611C10.9615 16.023 6.91033 16.1541 4.1238 13.9173C1.33728 11.6806 0.680102 7.77003 2.58812 4.77915C4.49613 1.78827 8.37726 0.645162 11.6576 2.10792C14.9379 3.57068 16.5994 7.18541 15.5403 10.5548C15.464 10.7982 15.5264 11.063 15.7039 11.2492C15.8813 11.4355 16.147 11.5151 16.4007 11.458C16.6545 11.4009 16.8578 11.2157 16.9341 10.9723C18.2002 6.97378 16.288 2.6708 12.4345 0.846952C8.58104 -0.976895 3.94275 0.225742 1.52015 3.67688C-0.902457 7.12801 -0.382339 11.7919 2.74404 14.6516C5.87041 17.5112 10.6648 17.7083 14.0257 15.1154L16.7649 17.7935C17.0478 18.0688 17.5051 18.0688 17.788 17.7935C18.0707 17.5142 18.0707 17.0645 17.788 16.7853L17.78 16.7459Z"
								fill="white" />
						</svg>
					</div>
				</div>
				<div class="tab1-tables">
					<template v-for="(item, index) in tab1Data">
						<div class="table-container">
							<AccordionTable :text="item.category">
								<div
									class="tab1-table-content"
									:id="'tab1-table-content-' + index">
									<div
										class="tab1-table-data"
										:id="
											'tab1-table-' +
											index +
											tableItemIndex
										"
										v-for="(
											tableItem, tableItemIndex
										) in item.options">
										<div class="table-label">
											<div class="table-data__value">
												{{ tableItem.label }}
											</div>
										</div>
										<div
											:class="
												activeOdd ==
												'tab1-odd-' +
													index +
													tableItemIndex
													? 'table-active-odd'
													: 'table-odd'
											"
											:id="
												'tab1-odd-' +
												index +
												tableItemIndex
											"
											@click="setActiveOdd($event)">
											<div class="table-data__value">
												{{ tableItem.odds }}
											</div>
										</div>
									</div>
								</div>
							</AccordionTable>
						</div>
					</template>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-2'">
				<div class="content-head">
					<div class="content-head__title">Information</div>
					<div class="content-head__buttons">
						<svg
							width="14"
							height="13"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.4697 7.53032C12.7626 7.82322 13.2374 7.82322 13.5303 7.53032C13.8232 7.23743 13.8232 6.76256 13.5303 6.46966L7.53032 0.469662C7.23743 0.176769 6.76256 0.176769 6.46966 0.469662L0.469663 6.46966C0.176769 6.76255 0.176769 7.23743 0.469663 7.53032C0.762555 7.82321 1.23743 7.82321 1.53032 7.53032L6.99999 2.06065L12.4697 7.53032ZM12.4697 12.5303C12.7626 12.8232 13.2374 12.8232 13.5303 12.5303C13.8232 12.2374 13.8232 11.7626 13.5303 11.4697L7.53032 5.46966C7.23743 5.17677 6.76256 5.17677 6.46966 5.46966L0.469663 11.4697C0.176769 11.7626 0.176769 12.2374 0.469663 12.5303C0.762555 12.8232 1.23743 12.8232 1.53032 12.5303L6.99999 7.06065L12.4697 12.5303Z"
								fill="white" />
						</svg>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17.78 16.7459L14.6863 13.7212L14.6138 13.611C14.479 13.4767 14.2947 13.4011 14.1023 13.4011C13.9098 13.4011 13.7255 13.4767 13.5907 13.611C10.9615 16.023 6.91033 16.1541 4.1238 13.9173C1.33728 11.6806 0.680102 7.77003 2.58812 4.77915C4.49613 1.78827 8.37726 0.645162 11.6576 2.10792C14.9379 3.57068 16.5994 7.18541 15.5403 10.5548C15.464 10.7982 15.5264 11.063 15.7039 11.2492C15.8813 11.4355 16.147 11.5151 16.4007 11.458C16.6545 11.4009 16.8578 11.2157 16.9341 10.9723C18.2002 6.97378 16.288 2.6708 12.4345 0.846952C8.58104 -0.976895 3.94275 0.225742 1.52015 3.67688C-0.902457 7.12801 -0.382339 11.7919 2.74404 14.6516C5.87041 17.5112 10.6648 17.7083 14.0257 15.1154L16.7649 17.7935C17.0478 18.0688 17.5051 18.0688 17.788 17.7935C18.0707 17.5142 18.0707 17.0645 17.788 16.7853L17.78 16.7459Z"
								fill="white" />
						</svg>
					</div>
				</div>
				<div class="tab2-tables">
					<template v-for="(item, index) in tab2Data">
						<div class="table-container">
							<AccordionTable :text="item.category">
								<div
									class="tab2-table-content"
									:id="'tab2-table-content-' + index">
									<div
										class="tab2-table-data"
										:id="
											'tab2-table-' +
											index +
											tableItemIndex
										"
										v-for="(
											tableItem, tableItemIndex
										) in item.options">
										<div class="table-label">
											<div class="table-data__value">
												{{ tableItem.label }}
											</div>
										</div>
										<div
											:class="
												activeOdd ==
												'tab2-odd-' +
													index +
													tableItemIndex
													? 'table-active-odd'
													: 'table-odd'
											"
											:id="
												'tab2-odd-' +
												index +
												tableItemIndex
											"
											@click="setActiveOdd($event)">
											<div class="table-data__value">
												{{ tableItem.odds }}
											</div>
										</div>
									</div>
								</div>
							</AccordionTable>
						</div>
					</template>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-3'">3</div>
			<div class="content" v-if="currentTab == 'tab-4'">4</div>
			<div class="content" v-if="currentTab == 'tab-5'">5</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu />
		</div>
	</div>
</template>

<script setup>
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
	import HeadUnregistered from "@/components/layout/head/HeadUnregistered.vue";
	import AccordionTable from "@/components/layout/tables/AccordionTable.vue";
	import { ref } from "vue";
	const tabList = [
		{ id: "tab-1", name: "Main" },
		{ id: "tab-2", name: "1st half" },
		{ id: "tab-3", name: "1st half" },
		{ id: "tab-4", name: "Additional events" },
		{ id: "tab-5", name: "All" },
	];
	const currentTab = ref("tab-1");
	const setCurrentTab = (event) => {
		currentTab.value = event.currentTarget.id;
	};
	const activeOdd = ref("");
	const setActiveOdd = (event) => {
		activeOdd.value = event.currentTarget.id;
	};
	const tab1Data = [
		{
			category: "Match Result",
			options: [
				{ label: "W1", odds: 1.57 },
				{ label: "X", odds: 1.57 },
				{ label: "W2", odds: 1.57 },
			],
		},
		{
			category: "Double Chance",
			options: [
				{ label: "W1", odds: 1.57 },
				{ label: "X", odds: 1.57 },
				{ label: "W2", odds: 1.57 },
			],
		},
		{
			category: "Handicap",
			options: [
				{ label: "W1", odds: 1.57 },
				{ label: "X", odds: 1.57 },
				{ label: "W2", odds: 1.57 },
			],
		},
		{
			category: "Handicap",
			options: [
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
			],
		},
		{
			category: "Total",
			options: [
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
			],
		},
		{
			category: "Total FC Copenhagen",
			options: [
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
			],
		},
		{
			category: "Goals",
			options: [
				{ label: "Both teams to score", odds: 1.57 },
				{ label: "First team or second team not score", odds: 1.57 },
				{ label: "No goals", odds: 1.57 },
			],
		},
		{
			category: "Time of 1st goal from 26 to 90",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "Time of 1st goal from 1 to 25",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "Time of 1st goal from 1 to 55",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "Time of 1st goal from 1 to 55",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "Time of 2nd goal <1.5 goals",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "Time of 2nd goal from 56 to",
			options: [{ label: "Yes", odds: 1.57 }],
		},
		{
			category: "The number in the final score",
			options: [
				{ label: "5", odds: 1.57 },
				{ label: "6", odds: 1.57 },
				{ label: "7", odds: 1.57 },
				{ label: "8", odds: 1.57 },
				{ label: "9", odds: 1.57 },
			],
		},
	];
	const tab2Data = [
		{
			category: "1st half. Result",
			options: [
				{ label: "W1", odds: 1.57 },
				{ label: "X", odds: 1.57 },
				{ label: "W2", odds: 1.57 },
			],
		},
		{
			category: "1st half. Handicap",
			options: [
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
				{ label: "H1 (-2.5)", odds: 1.57 },
				{ label: "H2 (-2.5)", odds: 1.57 },
			],
		},
		{
			category: "Goal 1st half.",
			options: [
				{ label: "Both teams to score", odds: 1.57 },
				{ label: "First team or second team not score", odds: 1.57 },
				{ label: "No goals", odds: 1.57 },
			],
		},
		{
			category: "1st half. Double chance",
			options: [
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
			],
		},
		{
			category: "1st half. Total",
			options: [
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
				{ label: "TO (2.5)", odds: 1.57 },
				{ label: "TU (2.5)", odds: 1.57 },
			],
		},
	];
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.page {
		background: $bg-black;
		height: 100%;
		min-height: 100dvh;
		padding-bottom: 71px;
	}
	.page-content {
		position: relative;
		z-index: 2;
		margin-top: 15px;
	}
	.header__controls {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.back {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.back__title {
		color: white;
		font: $h4-regular;
	}
	.buttons {
		display: flex;
		width: 100%;
		max-width: 81px;
		justify-content: space-between;
	}
	.match-info {
		margin-top: 22px;
		background: url("@/assets/images/match-background.png");
		background-repeat: no-repeat;
		background-position: 0% 0%;
		background-size: 100% 100%;
		height: 159px;
		width: 100%;
		padding: 40px 15px 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.match-info__teams {
		margin: 0 auto;
		width: 100%;
	}
	.team {
		width: fit-content;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 7px;
		color: white;
		font: $h4-medium;
	}
	.separator {
		margin: 8px 0 3px;
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(8, 14, 19, 0) 0%,
			rgba(239, 180, 92, 0.52) 36%,
			rgba(255, 212, 148, 1) 54%,
			rgba(239, 180, 92, 0.2234) 71%,
			rgba(8, 14, 19, 0) 100%
		);
	}
	.info {
		display: flex;
		color: white;
		font: $h7-regular;
		align-items: center;
		justify-content: space-between;
	}
	.info__date {
		display: flex;
		flex-shrink: 0;
		gap: 6px;
		border-radius: 2px;
		padding: 0 6px;
		display: flex;
		align-items: center;
		background: $secondary-button-bg;
		backdrop-filter: blur(4px);
	}
	.info__id-container {
		display: flex;
		height: 18px;
		gap: 16px;
		align-items: center;
	}
	.info__id {
		border-radius: 2px;
		padding: 0 6px;
		display: flex;
		align-items: center;
		background: $secondary-button-bg;
		backdrop-filter: blur(4px);
	}
	.header__tabs {
		margin-top: 20px;
		display: flex;
		padding: 0 24px 0 7px;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.tab {
		font: $h5-medium;
		color: white;
	}
	.tab-active {
		padding: 10px 10px 12px;
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
	.content {
		color: white;
		padding: 0 15px 0;
	}
	.content-head {
		margin: 9px 0 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content-head__title {
		font: $h2;
	}
	.content-head__buttons {
		display: flex;
		gap: 14px;
		align-items: center;
	}

	// First tab tables styles
	.tab1-tables {
		padding-bottom: 7px;
	}
	.table-container {
		padding-bottom: 8px;
	}
	.tab1-table-content {
		background: $table-bg-gray;
		overflow: hidden;
	}
	#tab1-table-content-0,
	#tab1-table-content-1,
	#tab1-table-content-2 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	#tab1-table-content-3,
	#tab1-table-content-4,
	#tab1-table-content-5 {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	#tab1-table-content-6 .tab1-table-data {
		height: 69px;
	}
	#tab1-table-content-6 {
		display: grid;
		grid-template-columns: 1.5fr 1.5fr 1fr;
	}
	#tab1-table-content-7,
	#tab1-table-content-8,
	#tab1-table-content-9,
	#tab1-table-content-10,
	#tab1-table-content-11,
	#tab1-table-content-12,
	#tab1-table-content-13 {
		display: grid;
		grid-template-columns: 1fr;
	}

	#tab1-table-60 {
		grid-template-columns: repeat(3, 1fr);
	}
	#tab1-table-60 .table-label {
		grid-column: 1 / span 2;
		padding: 2px 6px;
	}
	#tab1-table-61 {
		grid-template-columns: repeat(3, 1fr);
	}
	#tab1-table-61 .table-label {
		grid-column: 1 / span 2;
		padding: 2px 4px;
	}
	#tab1-table-62 .table-label {
		padding: 2px 6px;
	}

	#tab1-table-00 {
		border-bottom-left-radius: 3px;
	}
	.tab1-table-data {
		font: normal 400 12px/140% "Noto Sans", sans-serif;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 46px;
		position: relative;
	}
	.table-label::before,
	.table-odd::before {
		content: "";
		position: absolute;
		z-index: 1;
		inline-size: 1px;
		block-size: 100dvh;
		inset-block-start: 0;
		inset-inline-start: 0;
		background-color: $bg-black;
	}
	.tab1-table-data:first-of-type .table-label::before {
		content: "";
		position: absolute;
		z-index: -1;
		inline-size: 1px;
		block-size: 100dvh;
		inset-block-start: 0;
		inset-inline-start: 0;
		background-color: $bg-black;
	}
	#tab1-table-content-3
		.tab1-table-data:nth-of-type(odd)
		.table-label::before,
	#tab1-table-content-4
		.tab1-table-data:nth-of-type(odd)
		.table-label::before,
	#tab1-table-content-5
		.tab1-table-data:nth-of-type(odd)
		.table-label::before,
	#tab1-table-content-13 .tab1-table-data .table-label::before {
		content: none;
		display: none;
	}
	.tab1-table-data::after {
		content: "";
		position: absolute;
		z-index: 1;
		inline-size: 100vw;
		block-size: 1px;
		inset-inline-start: 0;
		inset-block-start: 0;
		background-color: $bg-black;
	}

	// Second tab tables styles
	.tab2-tables {
		padding-bottom: 54px;
	}
	.tab2-table-content {
		background: $table-bg-gray;
		overflow: hidden;
	}
	#tab2-table-content-0,
	#tab2-table-content-2 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	#tab2-table-content-1,
	#tab2-table-content-3,
	#tab2-table-content-4 {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	#tab2-table-content-2 .tab2-table-data {
		height: 69px;
	}
	#tab2-table-content-2 {
		display: grid;
		grid-template-columns: 1.5fr 1.5fr 1fr;
	}

	#tab2-table-20 {
		grid-template-columns: repeat(3, 1fr);
	}
	#tab2-table-20 .table-label {
		grid-column: 1 / span 2;
		padding: 2px 6px;
	}
	#tab2-table-21 {
		grid-template-columns: repeat(3, 1fr);
	}
	#tab2-table-21 .table-label {
		grid-column: 1 / span 2;
		padding: 2px 4px;
	}
	#tab2-table-22 .table-label {
		padding: 2px 6px;
	}

	#tab2-table-00 {
		border-bottom-left-radius: 3px;
	}
	.tab2-table-data {
		font: normal 400 12px/140% "Noto Sans", sans-serif;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 46px;
		position: relative;
	}
	.table-label::before,
	.table-odd::before {
		content: "";
		position: absolute;
		z-index: 1;
		inline-size: 1px;
		block-size: 100dvh;
		inset-block-start: 0;
		inset-inline-start: 0;
		background-color: $bg-black;
	}
	.tab2-table-data:first-of-type .table-label::before {
		content: "";
		position: absolute;
		z-index: -1;
		inline-size: 1px;
		block-size: 100dvh;
		inset-block-start: 0;
		inset-inline-start: 0;
		background-color: $bg-black;
	}
	#tab2-table-content-1
		.tab2-table-data:nth-of-type(odd)
		.table-label::before,
	#tab2-table-content-4
		.tab2-table-data:nth-of-type(odd)
		.table-label::before {
		content: none;
		display: none;
	}
	.tab2-table-data::after {
		content: "";
		position: absolute;
		z-index: 1;
		inline-size: 100vw;
		block-size: 1px;
		inset-inline-start: 0;
		inset-block-start: 0;
		background-color: $bg-black;
	}
	.table-label,
	.table-odd {
		position: relative;
		display: grid;
		place-items: center;
	}
	.table-data__value {
		height: fit-content;
		width: fit-content;
	}
	.table-odd {
		font: $h6-medium;
		color: $gold-accent;
	}
	.table-active-odd {
		font: $h6-medium;
		color: $bg-black;
		background: $gold-accent;
		display: grid;
		place-items: center;
	}
	@media (max-width: 365px) {
		.header__tabs {
			display: flex;
			padding: 0 7px 0 7px;
		}
		.tab {
			font: $h6-medium;
		}
		.tab-active {
			padding: 6px 10px 8px;
		}
		.gradient-bg {
			top: 29.5px;
		}
	}
</style>
