import { createApp } from "vue";
import MainScreen from "./views/MainScreen.vue";
import AboutScreen from "./views/AboutScreen.vue";
import BonusesScreen from "./views/BonusesScreen.vue";
import PrematchScreen from "./views/prematch/PrematchScreen.vue";
import PrematchLiveMenuScreen from "./views/coupon/PrematchLiveMenuScreen.vue";
import PrematchLive2Screen from "./views/prematch/PrematchLive2Screen.vue";
import PrematchAccordionScreen from "./views/prematch/PrematchAccordionScreen.vue";
import PrematchAustraliaFootballScreen from "./views/prematch/PrematchAustraliaFootballScreen.vue";
import PrematchFootballNewScreen from "./views/prematch/PrematchFootballNewScreen.vue";
import LoginScreen from "./views/LoginScreen.vue";
import UIKitScreen from "./views/UIKitScreen.vue";
import RegistrationScreen from "./views/RegistrationScreen.vue";
import RecoveryVariant1Screen from "./views/recovery/RecoveryVariant1Screen.vue";
import RecoveryVariant2Screen from "./views/recovery/RecoveryVariant2Screen.vue";
import RecoveryVariant3Screen from "./views/recovery/RecoveryVariant3Screen.vue";
import NoEventsScreen from "./views/prematch/NoEventsScreen.vue";
import NoResultsScreen from "./views/prematch/NoResultsScreen.vue";
import SearchResultsScreen from "./views/prematch/SearchResultsScreen.vue";
import SavedEventsScreen from "./views/prematch/SavedEventsScreen.vue";
import EventLineScreen from "./views/EventLineScreen.vue";
import EventLiveScreen from "./views/events-sport-live/EventLiveScreen.vue";
// import EventLiveVariant2Screen from "./views/events-sport-live/EventLiveVariant2Screen.vue";
// import EventLiveVariant3Screen from "./views/events-sport-live/EventLiveVariant3Screen.vue";
// import EventLiveVariant4Screen from "./views/events-sport-live/EventLiveVariant4Screen.vue";
// import PrematchBets1Screen from "./views/coupon/PrematchBets1Screen.vue";
// import PrematchBets2Screen from "./views/coupon/PrematchBets2Screen.vue";
// import PrematchBets3Screen from "./views/coupon/PrematchBets3Screen.vue";
// import PrematchOddSettingScreen from "./views/coupon/PrematchOddSettingScreen.vue";
// import PrematchMultiBonusScreen from "./views/coupon/PrematchMultiBonusScreen.vue";
// import PrematchSingleAlert from "./views/coupon/PrematchSingleAlert.vue";
// import PrematchCoefRed from "./views/coupon/PrematchCoefRed.vue";
// import PrematchCoefChanged from "./views/coupon/PrematchCoefChanged.vue";
// import PrematchCoefBlocked from "./views/coupon/PrematchCoefBlocked.vue";
// import AccountPrematchLiveMenuScreen from "./views/account/PrematchLiveMenuScreen.vue";
// import AccountScreen from "./views/account/AccountScreen.vue";
// import AccountPayments2Screen from "./views/account/AccountPayments2Screen.vue";
// import NoMessagesScreen from "./views/account/NoMessagesScreen.vue";
// import MessagesScreen from "./views/account/MessagesScreen.vue";
// import ChatScreen from "./views/account/ChatScreen.vue";
// import ResultParamsScreen from "./views/results/ResultParamsScreen.vue";
// import ResultsScreen from "./views/results/ResultsScreen.vue";
// import GamesScreen from "./views/games/GamesScreen.vue";
// import GamesFavoritesScreen from "./views/games/GamesFavoritesScreen.vue";
// import GamesResultsScreen from "./views/games/GamesResultsScreen.vue";

import { createWebHistory, createRouter } from "vue-router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/styles/style.scss";
import App from "./App.vue";
import ToastIconInfo from "./components/layout/toasts/ToastIconInfo.vue";
import ToastIconClose from "./components/layout/toasts/ToastIconClose.vue";

const app = createApp(App);
const routes = [
	{ path: '/', component: MainScreen },
	{ path: '/about', component: AboutScreen },
	{ path: '/bonuses', component: BonusesScreen },
	{ path: '/ui-kit', component: UIKitScreen },
	{ path: '/login', component: LoginScreen },
	{ path: '/register', component: RegistrationScreen },
	{ path: '/recovery-variant1', component: RecoveryVariant1Screen },
	{ path: '/recovery-variant2', component: RecoveryVariant2Screen },
	{ path: '/recovery-variant3', component: RecoveryVariant3Screen },
	{ path: '/prematch', component: PrematchScreen },
	{ path: '/prematch-live-menu', component: PrematchLiveMenuScreen },
	{ path: '/prematch-live-variant2', component: PrematchLive2Screen },
	{ path: '/prematch-accordion', component: PrematchAccordionScreen },
	{
		path: '/prematch-australia-football',
		component: PrematchAustraliaFootballScreen,
	},
	{ path: '/prematch-new-football', component: PrematchFootballNewScreen },
	{ path: '/prematch/saved-noevents', component: NoEventsScreen },
	{ path: '/prematch/no-results', component: NoResultsScreen },
	{ path: '/prematch/search-results', component: SearchResultsScreen },
	{ path: '/prematch/saved-events', component: SavedEventsScreen },
	{ path: '/event-line', component: EventLineScreen },
	{ path: '/event-live', component: EventLiveScreen }, // ~50%
	// { path: '/event-live-variant2', component: EventLiveVariant2Screen },
	// { path: '/event-live-variant3', component: EventLiveVariant3Screen },
	// { path: '/event-live-variant4', component: EventLiveVariant4Screen },
	// { path: '/prematch-bets1', component: PrematchBets1Screen },
	// { path: '/prematch-bets2', component: PrematchBets2Screen },
	// { path: '/prematch-bets3', component: PrematchBets3Screen },
	// { path: '/prematch-oddsetting', component: PrematchOddSettingScreen },
	// { path: '/prematch-multibonus', component: PrematchMultiBonusScreen },
	// { path: '/prematch-singlealert', component: PrematchSingleAlert },
	// { path: '/prematch-coefred', component: PrematchCoefRed },
	// { path: '/prematch-coefchanged', component: PrematchCoefChanged },
	// { path: '/prematch-coefblocked', component: PrematchCoefBlocked },
	// {
	// 	path: '/authed/prematch-live-menu',
	// 	component: AccountPrematchLiveMenuScreen,
	// },
	// { path: '/authed/account', component: AccountScreen },
	// { path: '/authed/account2', component: AccountPayments2Screen },
	// { path: '/authed/no-messages', component: NoMessagesScreen },
	// { path: '/authed/messages', component: MessagesScreen },
	// { path: '/authed/chat', component: ChatScreen },
	// { path: '/result-params', component: ResultParamsScreen },
	// { path: '/results', component: ResultsScreen },
	// { path: '/games', component: GamesScreen },
	// { path: '/games/results', component: GamesResultsScreen },
	// { path: '/games/favorites', component: GamesFavoritesScreen },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(router).mount("#app");
app.use(Toast, {
	position: "top-center",
	timeout: false,
	icon: ToastIconInfo,
	closeButton: ToastIconClose,
});
