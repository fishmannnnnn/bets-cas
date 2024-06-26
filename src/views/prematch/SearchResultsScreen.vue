<template>
	<div class="page">
		<div class="header-container">
			<HeadUnregistered />
		</div>
		<div class="page-content">
			<div class="content-container">
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
					<div class="back-title">Search results</div>
				</div>
				<div class="results">
					<div class="result" v-for="(item, index) in data">
						<SearchResultCategory
							:sport="item.sport"
							:imgName="item.imgName"
							:league="item.league"
							:shadow-color="item.shadowColor">
							<div class="data-container">
								<div
									class="data"
									v-for="(event, i) in item.tableData">
									<div class="id">
										{{ event.id }}
									</div>
									<div class="container-teams-date">
										<div class="container-left">
											<div class="teams">
												<div
													class="team"
													v-for="team in event.teams"
													v-html="
														highlight(
															team,
															highlightWord
														)
													"
													:key="i"></div>
											</div>
											<div class="live-container">
												<svg
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<mask
														id="path-1-inside-1_112_11"
														fill="white">
														<path
															d="M5.84224 16.5818C5.67515 16.983 5.21252 17.1757 4.82749 16.9743C3.23354 16.1403 1.92023 14.8443 1.0655 13.2477C0.0865469 11.4192 -0.230759 9.30858 0.167256 7.27299C0.56527 5.23741 1.65417 3.40177 3.24978 2.07656C4.84539 0.751354 6.84977 0.0179229 8.92388 0.000323982C10.998 -0.0172749 13.0145 0.682039 14.6324 1.97998C16.2503 3.27792 17.3702 5.09482 17.8027 7.12336C18.2352 9.15189 17.9537 11.2676 17.0059 13.1125C16.1784 14.7233 14.8873 16.0414 13.3077 16.9023C12.9262 17.1103 12.4603 16.9254 12.2865 16.5271V16.5271C12.1126 16.1289 12.2971 15.6686 12.6748 15.4536C13.9235 14.7427 14.9444 13.6815 15.6061 12.3934C16.3882 10.8711 16.6204 9.12534 16.2636 7.45149C15.9067 5.77764 14.9826 4.27842 13.6476 3.20743C12.3126 2.13643 10.6487 1.55939 8.93723 1.57391C7.22578 1.58843 5.57187 2.19363 4.25525 3.28712C2.93863 4.38062 2.04012 5.8953 1.7117 7.57496C1.38328 9.25462 1.6451 10.9962 2.45289 12.505C3.13636 13.7817 4.1752 14.8255 5.43577 15.5151C5.81701 15.7236 6.00933 16.1807 5.84224 16.5818V16.5818Z" />
													</mask>
													<path
														d="M5.84224 16.5818C5.67515 16.983 5.21252 17.1757 4.82749 16.9743C3.23354 16.1403 1.92023 14.8443 1.0655 13.2477C0.0865469 11.4192 -0.230759 9.30858 0.167256 7.27299C0.56527 5.23741 1.65417 3.40177 3.24978 2.07656C4.84539 0.751354 6.84977 0.0179229 8.92388 0.000323982C10.998 -0.0172749 13.0145 0.682039 14.6324 1.97998C16.2503 3.27792 17.3702 5.09482 17.8027 7.12336C18.2352 9.15189 17.9537 11.2676 17.0059 13.1125C16.1784 14.7233 14.8873 16.0414 13.3077 16.9023C12.9262 17.1103 12.4603 16.9254 12.2865 16.5271V16.5271C12.1126 16.1289 12.2971 15.6686 12.6748 15.4536C13.9235 14.7427 14.9444 13.6815 15.6061 12.3934C16.3882 10.8711 16.6204 9.12534 16.2636 7.45149C15.9067 5.77764 14.9826 4.27842 13.6476 3.20743C12.3126 2.13643 10.6487 1.55939 8.93723 1.57391C7.22578 1.58843 5.57187 2.19363 4.25525 3.28712C2.93863 4.38062 2.04012 5.8953 1.7117 7.57496C1.38328 9.25462 1.6451 10.9962 2.45289 12.505C3.13636 13.7817 4.1752 14.8255 5.43577 15.5151C5.81701 15.7236 6.00933 16.1807 5.84224 16.5818V16.5818Z"
														stroke="#F44C35"
														stroke-width="2"
														mask="url(#path-1-inside-1_112_11)" />
													<mask
														id="path-2-inside-2_112_11"
														fill="white">
														<path
															d="M11.0436 13.5816C11.2251 13.9887 11.7062 14.1761 12.0843 13.94C12.9841 13.3783 13.7181 12.5784 14.2003 11.6222C14.8043 10.4245 14.9764 9.05506 14.6873 7.7452C14.3983 6.43534 13.666 5.26542 12.614 4.43311C11.5621 3.6008 10.255 3.15714 8.9138 3.1771C7.57254 3.19706 6.2793 3.67941 5.25259 4.54265C4.22588 5.40589 3.52866 6.59708 3.27873 7.91496C3.02881 9.23284 3.2415 10.5966 3.88088 11.7758C4.39136 12.7172 5.14882 13.4949 6.06497 14.0296C6.44993 14.2543 6.92522 14.0526 7.09456 13.6403V13.6403C7.26391 13.228 7.06096 12.7625 6.68847 12.5177C6.11145 12.1385 5.63294 11.6206 5.29988 11.0064C4.83772 10.1541 4.68398 9.1683 4.86463 8.2157C5.04528 7.2631 5.54926 6.40207 6.29139 5.7781C7.03353 5.15412 7.96832 4.80546 8.93781 4.79104C9.90731 4.77661 10.8521 5.0973 11.6124 5.69892C12.3728 6.30053 12.9022 7.14619 13.1111 8.09299C13.32 9.03979 13.1957 10.0297 12.7591 10.8954C12.4444 11.5193 11.9816 12.0511 11.4161 12.4473C11.051 12.7031 10.862 13.1745 11.0436 13.5816V13.5816Z" />
													</mask>
													<path
														d="M11.0436 13.5816C11.2251 13.9887 11.7062 14.1761 12.0843 13.94C12.9841 13.3783 13.7181 12.5784 14.2003 11.6222C14.8043 10.4245 14.9764 9.05506 14.6873 7.7452C14.3983 6.43534 13.666 5.26542 12.614 4.43311C11.5621 3.6008 10.255 3.15714 8.9138 3.1771C7.57254 3.19706 6.2793 3.67941 5.25259 4.54265C4.22588 5.40589 3.52866 6.59708 3.27873 7.91496C3.02881 9.23284 3.2415 10.5966 3.88088 11.7758C4.39136 12.7172 5.14882 13.4949 6.06497 14.0296C6.44993 14.2543 6.92522 14.0526 7.09456 13.6403V13.6403C7.26391 13.228 7.06096 12.7625 6.68847 12.5177C6.11145 12.1385 5.63294 11.6206 5.29988 11.0064C4.83772 10.1541 4.68398 9.1683 4.86463 8.2157C5.04528 7.2631 5.54926 6.40207 6.29139 5.7781C7.03353 5.15412 7.96832 4.80546 8.93781 4.79104C9.90731 4.77661 10.8521 5.0973 11.6124 5.69892C12.3728 6.30053 12.9022 7.14619 13.1111 8.09299C13.32 9.03979 13.1957 10.0297 12.7591 10.8954C12.4444 11.5193 11.9816 12.0511 11.4161 12.4473C11.051 12.7031 10.862 13.1745 11.0436 13.5816V13.5816Z"
														stroke="#F44C35"
														stroke-width="2"
														mask="url(#path-2-inside-2_112_11)" />
													<ellipse
														cx="9.00016"
														cy="8.99999"
														rx="2.64713"
														ry="2.64706"
														fill="#F44C35" />
												</svg>
												<div class="live-title">
													Live
												</div>
											</div>
										</div>
										<div class="container-right">
											<div class="date">
												{{ event.date }}
											</div>
											<svg
												class="star"
												width="19"
												height="18"
												viewBox="0 0 19 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													class="star-inactive"
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M9.5 1C9.79412 1 10.0627 1.16447 10.1929 1.42426L12.401 5.8308L17.339 6.54178C17.63 6.58367 17.8716 6.78463 17.9623 7.06018C18.053 7.33574 17.9771 7.63812 17.7664 7.84023L14.1939 11.2678L15.037 16.1101C15.0868 16.3957 14.9676 16.6844 14.7296 16.8547C14.4916 17.025 14.1761 17.0474 13.9158 16.9125L9.5 14.625L5.08422 16.9125C4.82388 17.0474 4.50838 17.025 4.2704 16.8547C4.03242 16.6844 3.91323 16.3957 3.96295 16.1101L4.80606 11.2678L1.23359 7.84023C1.02293 7.63812 0.946995 7.33574 1.0377 7.06018C1.1284 6.78463 1.37001 6.58367 1.66099 6.54178L6.59899 5.8308L8.80709 1.42426C8.93727 1.16447 9.20589 1 9.5 1Z"
													fill="none"
													stroke="none"
													stroke-linecap="round"
													stroke-linejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</SearchResultCategory>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu />
		</div>
	</div>
</template>

<script setup>
	import HeadUnregistered from '@/components/layout/head/HeadUnregistered.vue';
	import BottomMenu from '@/components/layout/menu/BottomMenu.vue';
	import SearchResultCategory from '@/components/layout/events/SearchResultCategory.vue';
	const highlight = (word, query) => {
		const check = new RegExp(query, 'ig');
		return word.toString().replace(check, (matchedText) => {
			return '<b>' + matchedText + '</b>';
		});
	};
	const highlightWord = 'Primer';
	const data = [
		{
			sport: 'Tennis',
			imgName: 'tennis',
			league: 'Italy <b>Premier</b> A Italy Premier A',
			shadowColor: 'red',
			tableData: [
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
			],
		},
		{
			sport: 'Tennis',
			imgName: 'tennis',
			league: 'Italy <b>Premier</b> A Italy Premier A',
			shadowColor: 'red',
			tableData: [
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
			],
		},
		{
			sport: 'Tennis',
			imgName: 'tennis',
			league: 'Italy <b>Premier</b> A Italy Premier A',
			shadowColor: 'red',
			tableData: [
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
				{
					id: 12345,
					teams: ['Primer Unitet', 'Carlos Alcaraz'],
					date: 'Thurs. March 21 21:45',
				},
			],
		},
	];
</script>

<style lang="scss" scoped>
	@import '@/styles/global';
	.page {
		background: $bg-black;
		min-height: 100dvh;
		height: 100%;
	}
	.page-content {
		padding-bottom: 91px;
	}
	.content-container {
		padding: 15px;
	}
	.back {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.back-title {
		font: $h2;
		color: white;
	}
	.results {
		margin-top: 20px;
	}
	.result {
		margin-bottom: 8px;
	}
	.data-container {
		background: $bg-gray;
		color: white;
		padding: 4px 14px 6px 16px;
	}
	.data {
		border-bottom: 1px solid #525565;
		padding: 8px 0;
	}
	.data:last-child {
		border: none;
	}
	.id {
		font: normal 400 12px/100% 'Noto Sans', sans-serif;
		color: $gray-text;
	}
	.container-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.live-container {
		display: flex;
		align-items: start;
		gap: 4px;
		font: $h5-regular;
	}
	.teams {
		color: $gold-accent;
		font: $h5-regular;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.container-teams-date {
		margin-top: 4px;
		display: flex;
		justify-content: space-between;
	}
	.container-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.date {
		max-width: 105px;
		text-align: center;
		font: $h6-medium;
	}
	.star-active {
		fill: $gold-accent;
		stroke: $gold-accent;
	}
	.star-inactive {
		fill: $gray-icon;
		stroke: $gray-icon;
	}
	@media (max-width: 360px) {
		.team {
			font: $h8;
		}
		.live-container {
			font: $h8;
		}
		.date {
			font: $h8;
			font-size: 9px;
			max-width: 75px;
		}
	}
</style>
