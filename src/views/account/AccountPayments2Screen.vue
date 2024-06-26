<template>
	<div class="page">
		<div class="popup-container-bg" v-if="showChangePasswordPopup">
			<ChangePasswordPopup
				@close="() => (showChangePasswordPopup = false)" />
		</div>
		<div class="popup-container-bg" v-if="showFilterPopup">
			<FilterPopup @close="() => (showFilterPopup = false)" />
		</div>
		<div class="header-container">
			<HeadRegistered counter="22" />
		</div>
		<div class="page-content">
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
			<div class="gradient-bg">
				<div class="gradient"></div>
			</div>
			<div class="content" v-if="currentTab == 'tab-1'">
				<div class="personal-data">
					<div class="personal-data__title">Personal data</div>
					<div class="personal-data__account">
						<img
							class="account__qr"
							src="@/assets/account/qr.png" />
						<div class="account__data">
							<div class="login-title">Your login</div>
							<div class="login">test@gmail.com</div>
							<div class="separator"></div>
							<div class="account-number-title">
								Your account number
							</div>
							<div class="account-number">123456789</div>
						</div>
					</div>
					<input
						class="account__phone-input input"
						type="text"
						placeholder="Phone" />
					<div class="account__email-input">
						<div class="input__title">Email</div>
						<input class="input-placeholder-top" type="text" />
					</div>
					<div class="button-wrapper">
						<ButtonLarge
							text="Change password"
							type="secondary"
							@click="() => (showChangePasswordPopup = true)" />
					</div>
				</div>

				<div class="identification">
					<input
						class="identification__passport-input input"
						type="text"
						placeholder="Series and passport number" />
					<input
						class="identification__lastname-input input"
						type="text"
						placeholder="Last name" />
					<input
						class="identification__firstname-input input"
						type="text"
						placeholder="First name" />
					<div class="identification__photo">
						<div id="preview" v-if="file">
							<div class="preview-photo-container">
								<img class="preview-photo" :src="url" />
								<svg
									class="preview-photo-del"
									@click="handlePhotoDel"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15 5L5 15"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round" />
									<path
										d="M5 5L15 15"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</div>
							<div class="img-title">{{ file.name }}</div>
						</div>
						<div
							class="photo__input-wrapper"
							v-if="!file"
							@click="handleInputClick">
							<div class="photo__input">
								<svg
									width="23"
									height="25"
									viewBox="0 0 23 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M22 11.8136L12.0717 21.6231C10.8554 22.8249 9.20574 23.5 7.48564 23.5C5.76554 23.5 4.11589 22.8249 2.8996 21.6231C1.68331 20.4214 1 18.7915 1 17.092C1 15.3924 1.68331 13.7625 2.8996 12.5608L12.8279 2.75125C13.6388 1.95009 14.7385 1.5 15.8853 1.5C17.032 1.5 18.1318 1.95009 18.9426 2.75125C19.7535 3.55241 20.209 4.63902 20.209 5.77203C20.209 6.90504 19.7535 7.99165 18.9426 8.79281L9.00352 18.6023C8.59809 19.0029 8.0482 19.228 7.47484 19.228C6.90147 19.228 6.35159 19.0029 5.94616 18.6023C5.54073 18.2018 5.31296 17.6585 5.31296 17.092C5.31296 16.5254 5.54073 15.9821 5.94616 15.5816L15.1182 6.52989"
										stroke="#F5AD22"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
								<div class="photo__input-file-text">
									<div class="file-text__title">
										Upload a photo of the document
									</div>
									<div class="file-text__description">
										Accept 1 file format jpeg, jpg, pdf,
										Heic up to 10 MB
									</div>
								</div>
							</div>
							<input
								class="file-input"
								ref="fileInput"
								type="file"
								accept=".jpeg,.jpg,.pdf,.heic"
								@change="onFileChange" />
						</div>
					</div>
					<div class="identification__date">
						<div class="input__title">Date of Birth</div>
						<input
							class="date__input input-placeholder-top"
							maxlength="10"
							v-model="dateInput"
							@keydown="dateInputMask($event)" />
						<svg
							class="date__svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
								stroke="#5E6471"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M13.3335 1.66797V5.0013"
								stroke="#5E6471"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M6.6665 1.66797V5.0013"
								stroke="#5E6471"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M2.5 8.33203H17.5"
								stroke="#5E6471"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
				</div>
				<div class="actions">
					<div class="cancel">
						<ButtonSmall type="secondary" text="Cancel" />
					</div>
					<div class="save">
						<ButtonSmall text="Save" />
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-2'">
				<div class="replenishment-title">
					Select replenishment method
				</div>
				<div class="cashier">
					<div class="card-bg">
						<div class="card">
							<div class="card__title">
								<img
									class="cashier__img"
									src="@/assets/account/cashier.png" />
								<div class="cashier__title">
									Through the cashier
								</div>
							</div>
							<div class="cashier-content">
								<div class="cashier__description">
									You can top up account at our payment
									points. To do this, contact and tell him one
									of the identifiers
								</div>
								<div class="separator separator-cashier"></div>
								<div class="cashier-data-container">
									<div class="cashier-login-data">
										<div class="cashier-data__title">
											Your login
										</div>
										<div class="cashier-data">
											test@gmail.com
										</div>
									</div>
									<div class="cashier-account-data">
										<div class="cashier-data__title">
											Your account number
										</div>
										<div class="cashier-data">
											123456789
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bank">
					<div class="card-bg">
						<div class="card">
							<div class="method-comission">
								<div class="card__title">
									<img
										class="bank__img"
										src="@/assets/account/bank.png" />
									<div class="bank__title">Bank card</div>
								</div>
								<div class="comission">
									Comission
									<span class="comission__percent">7%</span>
								</div>
							</div>
							<div class="bank-content">
								<BetAmountInput
									text="Amount"
									currency="USDT"
									:modelValue="bankAmount"
									@update:modelValue="bankAmount = $event" />
								<div class="amount-range">
									From 100 to 60 000
								</div>
								<div class="pay">
									<ButtonLarge text="Pay" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="paypal">
					<div class="card-bg">
						<div class="card">
							<div class="method-comission">
								<div class="card__title">
									<img
										class="paypal__img"
										src="@/assets/account/paypal.png" />
									<div class="paypal__title">Paypal</div>
								</div>
								<div class="comission">
									Comission
									<span class="comission__percent">7%</span>
								</div>
							</div>
							<div class="paypal-content">
								<BetAmountInput
									text="Amount"
									currency="USDT"
									:modelValue="paypalAmount"
									@update:modelValue="
										paypalAmount = $event
									" />
								<div class="amount-range">
									From 100 to 60 000
								</div>
								<div class="pay">
									<ButtonLarge text="Pay" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-3'">
				<div class="withdrawal-title">Select a withdrawal method</div>
				<div class="cashier">
					<div class="card-bg">
						<div class="card">
							<div class="method-comission">
								<div class="card__title">
									<img
										class="cashier__img"
										src="@/assets/account/cashier.png" />
									<div class="cashier__title">
										Through the cashier
									</div>
								</div>
								<div class="comission">
									Comission
									<span class="comission__percent">7%</span>
								</div>
							</div>

							<div class="cashier-content">
								<div class="funds-warning">
									Insufficient funds on balance
								</div>
								<div class="funds-description">
									To withdraw, you must have a minimum balance
									of <span>N USDT</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bank">
					<div class="card-bg">
						<div class="card">
							<div class="method-comission">
								<div class="card__title">
									<img
										class="bank__img"
										src="@/assets/account/bank.png" />
									<div class="bank__title">Bank card</div>
								</div>
								<div class="comission">
									Comission
									<span class="comission__percent">7%</span>
								</div>
							</div>
							<div class="bank-content">
                                <div class="funds-warning">
									Insufficient funds on balance
								</div>
								<div class="funds-description">
									To withdraw, you must have a minimum balance
									of <span>N USDT</span>
								</div>
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-4'">
				<div class="bets-history">
					<div class="bets-history__title">History</div>
					<svg
						@click="showFilterPopup = true"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18.3337 2.5H1.66699L8.33366 10.3833V15.8333L11.667 17.5V10.3833L18.3337 2.5Z"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</div>
				<div class="bets-history-cards">
					<div
						class="bets-history-card"
						v-for="(item, _i) in betsHistoryData">
						<BetsHistoryCard :data="item" />
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-5'">
				<div class="transaction-history">
					<div class="transaction-history__title">History</div>
					<svg
						@click="showFilterPopup = true"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18.3337 2.5H1.66699L8.33366 10.3833V15.8333L11.667 17.5V10.3833L18.3337 2.5Z"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</div>
				<div class="transaction-history-cards">
					<div
						class="transaction-history-card"
						v-for="(item, _i) in transactionHistoryData">
						<TransactionHistoryCard :data="item" />
					</div>
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-6'">
				<div class="bonuses-page-title">Bonuses</div>
				<div class="image-box" id="bonuses-img">
					<div class="image-box__stroke">
						<div class="image-box__top-left-stroke"></div>
						<div class="image-box__content">
							<img
								src="@/assets/images/about-slots.png"
								class="image-box__img"
								id="slots" />
						</div>
					</div>
				</div>
				<div class="bonuses-full-title">Guaranteed Bonus</div>
				<div class="bonuses-description">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the
				</div>
				<div class="image-box" id="guaranteed">
					<div class="image-box__stroke">
						<div class="image-box__top-left-stroke"></div>
						<div class="image-box__content">
							<img
								src="@/assets/images/about-balls.png"
								class="image-box__img"
								id="balls" />
						</div>
					</div>
				</div>
				<div class="bonuses-full-title">Cashback if you lose</div>
				<div class="bonuses-description">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the
				</div>
			</div>
			<div class="content" v-if="currentTab == 'tab-7'">messages</div>
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu counter="2" />
		</div>
	</div>
</template>

<script setup>
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
	import HeadRegistered from "@/components/layout/head/HeadRegistered.vue";
	import ButtonLarge from "@/components/layout/buttons/ButtonLarge.vue";
	import ButtonMedium from "@/components/layout/buttons/ButtonMedium.vue";
	import ButtonSmall from "@/components/layout/buttons/ButtonSmall.vue";
	import ChangePasswordPopup from "@/components/layout/popups/ChangePasswordPopup.vue";
	import BetAmountInput from "@/components/layout/inputs/BetAmountInput.vue";
	import BetsHistoryCard from "./BetsHistoryCard.vue";
	import TransactionHistoryCard from "./TransactionHistoryCard.vue";
	import FilterPopup from "@/components/layout/popups/FilterPopup.vue";
	import { ref } from "vue";
	const tabList = [
		{ id: "tab-1", name: "Basic information" },
		{ id: "tab-2", name: "Deposits" },
		{ id: "tab-3", name: "Payments" },
		{ id: "tab-4", name: "Bets history" },
		{ id: "tab-5", name: "History of transaction" },
		{ id: "tab-6", name: "Your bonuses" },
		{ id: "tab-7", name: "Messages" },
	];

	const currentTab = ref("tab-3");
	const setCurrentTab = (event) => {
		currentTab.value = event.currentTarget.id;
	};
	const showChangePasswordPopup = ref(false);

	const fileInput = ref(null);
	const handleInputClick = () => {
		fileInput.value.click();
	};
	const handlePhotoDel = () => {
		file.value = null;
	};
	const url = ref(null);
	const file = ref(null);
	const onFileChange = (e) => {
		file.value = e.target.files[0];
		console.log(file.value.name);
		url.value = URL.createObjectURL(file.value);
	};

	const dateInput = ref("");
	const dateInputMask = (e) => {
		const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
		let formattedValue = "";

		if (value.length <= 2) {
			formattedValue = value;
		} else if (value.length <= 4) {
			formattedValue = `${value.slice(0, 2)}.${value.slice(2)}`;
		} else {
			formattedValue = `${value.slice(0, 2)}.${value.slice(
				2,
				4
			)}.${value.slice(4, 8)}`;
		}

		dateInput.value = formattedValue;
	};

	const bankAmount = ref("");
	const paypalAmount = ref("");
	const cashierAmount = ref("");
	const cashierLabel = ref(1);
	const cashiersList = [
		{ id: 1, name: "Cashier 1 Address" },
		{ id: 2, name: "Cashier 2 Address" },
		{ id: 3, name: "Cashier 3 Address" },
	];
	const showFilterPopup = ref(false);
	const betsHistoryData = [
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 2.7,
			result: "Not calculated",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "4.30",
			winningAmount: 0,
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 2.7,
			result: "Not calculated",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "4.30",
			winningAmount: 0,
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 7.29,
			result: "Win",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
				{
					teams: ["Western United", "Brisbane Roar"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "4.30",
			winningAmount: 145.8,
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 2.7,
			result: "Lose",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "4.30",
			winningAmount: 0,
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 7.29,
			result: "Win",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
				{
					teams: ["Western United", "Brisbane Roar"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "20",
			winningAmount: 145.8,
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Single",
			stake: 20,
			totalOdds: 7.29,
			result: "Bonus Rackback",
			events: [
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
				{
					teams: ["Western United", "Brisbane Roar"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
				{
					teams: ["Golden State Warriors", "Philadelphia Seventy"],
					date: "Thurs. March 21 21:45",
					coefName: "First team win",
					coef: "(W1) 2.7",
				},
			],
			betAmount: "20",
			winningAmount: 145.8,
		},
	];
	const transactionHistoryData = [
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Payments",
			amount: 10,
			paymentSystem: "",
			bonus: "",
			description: "Bet on coupon #123456789",
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Payments",
			amount: 20,
			paymentSystem: "",
			bonus: "",
			description: "Winning on coupon #123456789",
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Payments",
			amount: 20,
			paymentSystem: "Through the cashier",
			bonus: "",
			description: "Payments",
		},
		{
			id: 123456789,
			date: "19.12.2023",
			time: "16:30",
			type: "Payments",
			amount: 20,
			paymentSystem: "Paypal",
			bonus: "",
			description: "Deposits",
		},
	];
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.popup-container-bg {
		padding: 15px;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(19px);
		z-index: 100000;
		overflow-y: scroll;
	}
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
	.header__tabs {
		display: flex;
		padding: 0 24px 0 7px;
		justify-content: space-between;
		align-items: center;
		position: relative;
		overflow-x: scroll;
	}
	.tab {
		font: $h5-medium;
		color: white;
		padding: 10px 10px 12px;
		text-wrap: nowrap;
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
		padding: 0 15px 30px;
		position: relative;
	}

	.personal-data {
		margin-top: 20px;
	}
	.personal-data__title {
		font: $h2;
	}
	.personal-data__account {
		margin-top: 12px;
		display: flex;
		gap: 8px;
		font: $h5-regular;
	}
	.account__qr {
		max-height: 124px;
	}
	.account__data {
		min-width: 0;
		width: 100%;
		padding: 13px 10px;
		border-radius: 4px;
		background: linear-gradient(
			180deg,
			rgba(8, 14, 19, 1) 0%,
			rgba(20, 31, 39, 1) 100%
		);
		overflow: hidden;
	}
	.login-title,
	.account-number-title {
		color: $gray-text;
		flex-shrink: 1;
	}
	.login,
	.account-number {
		margin-top: 3px;
		overflow-wrap: break-word;
	}
	.separator {
		margin: 8px 0;
		height: 1px;
		width: 100%;
		background: linear-gradient(
			90deg,
			rgba(21, 30, 37, 0.53) 0%,
			rgba(254, 180, 36, 1) 50%,
			rgba(33, 40, 46, 0.55) 100%
		);
	}
	.account__phone-input {
		margin-top: 20px;
	}
	.account__email-input {
		margin-top: 12px;
	}
	.input-placeholder-top {
		padding: 18.5px 8px 0;
		font: $h4-medium;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		border-radius: 4px;
		color: white;
		&::placeholder {
			color: $gray-text;
		}
	}
	.input__title {
		position: absolute;
		top: 7.5px;
		left: 8px;
		font: $h7-regular;
		color: $gray-text;
	}
	.account__email-input {
		position: relative;
	}
	.button-wrapper {
		margin-top: 9px;
	}

	.identification {
		margin-top: 20px;
	}
	.identification__lastname-input,
	.identification__firstname-input {
		margin-top: 12px;
	}
	.identification__photo {
		margin-top: 20px;
		input {
			width: 100%;
			height: 100%;
		}
	}
	.photo__input-wrapper {
		width: 100%;
	}
	.photo__input {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.file-text__title {
		font: $h4-medium;
		color: $gold-accent;
	}
	.file-text__description {
		font: $h7-regular;
		color: $gray-text;
	}
	.file-input {
		display: none;
	}
	#preview {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.preview-photo-container {
		position: relative;
	}
	.preview-photo-del {
		position: absolute;
		top: 0;
		right: 0;
		stroke: $gold-accent;
	}
	.preview-photo {
		border-radius: 4px;
		height: 96px;
		width: auto;
		opacity: 0.4;
	}
	.identification__date {
		margin-top: 20px;
	}
	.identification__date {
		position: relative;
	}
	.date__svg {
		position: absolute;
		top: 13px;
		right: 16px;
	}
	.actions {
		margin-top: 30px;
		display: flex;
		gap: 8px;
	}
	.cancel,
	.save {
		flex-grow: 1;
	}

	.replenishment-title,
	.withdrawal-title {
		margin-top: 20px;
		font: $h2;
	}
	.card-bg {
		border-radius: 4px;
		width: 100%;
		padding: 1px;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
	}
	.card {
		border-radius: 3px;
		background: $bg-black;
	}
	.card__title {
		display: flex;
		font: $h2;
	}
	.cashier {
		margin-top: 12px;
	}
	.cashier__img {
		width: 49px;
		height: 49px;
		margin: 1px 0 0 2px;
	}
	.cashier__title {
		margin-top: 15px;
		padding-right: 8px;
	}
	.cashier-content {
		padding: 0 10px 15px;
	}
	.separator-cashier {
		margin: 10px 0 12px;
	}
	.separator-payments {
		margin: 12px 0 14px;
	}
	.cashier__description {
		font: $h5-regular;
		padding: 0 1px;
	}
	.cashier-data-container {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		padding: 0 1px;
	}
	.cashier-login-data {
		flex-shrink: 1;
		min-width: 0;
	}
	.cashier-account-data {
		flex-shrink: 1;
	}
	.cashier-data__title {
		font: $h5-regular;
		color: $gray-text;
		overflow-wrap: break-word;
	}
	.cashier-data {
		margin-top: 3px;
		font: $h4-medium;
		overflow-wrap: break-word;
	}
	.bank {
		margin-top: 10px;
	}
	.bank__img {
		margin: 3px 0 0 6px;
		width: 42px;
		height: 43px;
	}
	.bank__title {
		margin-top: 13px;
	}
	.method-comission {
		display: flex;
		justify-content: space-between;
	}
	.comission {
		margin: 11px 11px 0 0;
		background: $bg-gray;
		padding: 4px 6px;
		border-radius: 4px;
		height: fit-content;
		display: flex;
		gap: 5px;
		font: $h8;
		color: $gray-text;
		.comission__percent {
			color: white;
			font: $h6-medium;
		}
	}
	.bank-content {
		padding: 0px 11px 14px;
	}
	.amount-range {
		font: $h7-regular;
		color: $gray-text;
		margin-top: 6px;
	}
	.pay {
		margin-top: 20px;
	}
	.paypal {
		margin-top: 10px;
	}
	.paypal__img {
		width: 38px;
		height: 39px;
		margin: 8px 3px 0 8px;
	}
	.paypal__title {
		margin-top: 13px;
	}
	.paypal-content {
		padding: 10px 11px 14px;
	}
	.payment-amount {
		margin: 3px 0 10px;
		font: $h5-regular;
	}
    .funds-warning{
        margin: 3px 0 8px;
		font: $h4-regular;
        color: $gold-accent;
    }
    .funds-description{
        font: $h6-regular;
        max-width: 305px;
        span{
            font-weight: 700;
        }
    }
	.issue-btn {
		margin-top: 20px;
		flex-grow: 1;
	}
	.card-title {
		font: $h5-regular;
		margin-top: 18px;
	}
	.card-input {
		margin-top: 10px;
	}
	.bets-history {
		padding-top: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.bets-history__title {
		font: $h2;
	}
	.bets-history-cards {
		padding-top: 16px;
	}
	.bets-history-card {
		margin-bottom: 8px;
		&:last-of-type {
			margin-bottom: 0;
		}
	}
	.transaction-history {
		padding-top: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.transaction-history__title {
		font: $h2;
	}
	.transaction-history-cards {
		padding-top: 16px;
	}
	.transaction-history-card {
		margin-bottom: 8px;
		&:last-of-type {
			margin-bottom: 0;
		}
	}
	.bonuses-page-title {
		font: $h2;
		padding-top: 20px;
	}
	.image-box__stroke {
		height: 146px;
		width: 100%;
		background: linear-gradient(136deg, #090b0c 68%, #f8b025 100%);
		padding: 1px;
		border-radius: 8px;
		box-shadow: 0 0 12px 0 rgba(255, 163, 79, 0.6), 0 0 2px 0 #ffa34f;
		position: relative;
	}
	.image-box__top-left-stroke {
		position: absolute;
		top: 0;
		left: 0;
		border-top-left-radius: 8px;
		width: 19%;
		height: 41%;
		background: linear-gradient(
			134deg,
			rgba(248, 176, 37, 1) 0%,
			rgba(30, 34, 37, 0) 40%
		);
	}
	.image-box__content {
		position: relative;
		z-index: 3;
		height: 100%;
		width: 100%;
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgb(49, 54, 57) 0%,
			rgb(25, 30, 34) 100%
		);
		border-radius: 7px;
		position: relative;
	}
	#bonuses-img {
		margin-top: 11px;
	}
	#slots {
		width: 154px;
		height: auto;
	}
	.image-box__img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.bonuses-full-title {
		padding-top: 15px;
		font: $h1;
	}
	.bonuses-description {
		margin-top: 6px;
		font: $h4-regular;
	}
	#guaranteed {
		margin-top: 30px;
	}
	#balls {
		width: 259px;
		height: auto;
	}

	.radio-label {
		display: flex;
		gap: 8px;
		align-items: center;
		margin-top: 10px;
	}
	.radio-label:nth-child(1) {
		margin-top: 0;
	}
	.radio-title {
		font: $h4-medium;
		position: relative;
	}

	.radio-label input[type="radio"] {
		display: none; /* Hide the default radio input */
	}

	.radio-label {
		position: relative;
		cursor: pointer;
	}

	.radio-label::before {
		content: "";
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="%2323252B" stroke="%23313440" /></svg>');
	}
	.radio-label-checked::before {
		content: "";
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="%2323252B" stroke="%23313440" /><rect x="3" y="3" width="12" height="12" rx="6" fill="%23F5AD22" /></svg>');
	}
</style>
