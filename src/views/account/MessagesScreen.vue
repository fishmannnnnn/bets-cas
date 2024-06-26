<template>
	<div class="page">
		<div class="header-container">
			<HeadRegistered counter="1" />
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
                        <span>{{ item.counter }}</span>
					</div>
				</template>
			</div>
			<div class="gradient-bg">
				<div class="gradient"></div>
			</div>
			<div class="content" v-if="currentTab == 'tab-1'">
				<div class="message" v-for="(item, _i) in headersList">
					<MessageHeader :data="item"/>
				</div>
			</div>
			
		</div>
		<div class="bottom-menu__wrapper">
			<BottomMenu counter="2" />
		</div>
	</div>
</template>

<script setup>
	import BottomMenu from "@/components/layout/menu/BottomMenu.vue";
	import HeadRegistered from "@/components/layout/head/HeadRegistered.vue";
    import MessageHeader from "./MessageHeader.vue";
	import { ref } from "vue";

	const tabList = [
		{ id: "tab-1", name: "All", counter: 1 },
		{ id: "tab-2", name: "Mass", counter: 0 },
		{ id: "tab-3", name: "Private", counter: 1 },
	];
	const currentTab = ref("tab-1");
	const setCurrentTab = (event) => {
		currentTab.value = event.currentTarget.id;
	};

	const headersList = [
		{
			subject: "Subject 2",
			date: "19.12.2023",
			time: "16:30",
			unread: true,
		},
		{
			subject: "Subject 2",
			date: "19.12.2023",
			time: "16:30"
		},
	]
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
	.header__tabs {
		display: flex;
		padding: 0 11px;
		justify-content: space-between;
		align-items: center;
		position: relative;
		overflow-x: scroll;
	}
	.tab {
		font: $h5-medium;
		color: white;
        width: 100%;
		text-wrap: nowrap;
        height: 39.5px;
        padding-top: 10px;
        display: flex;
        place-content: center;
        span{
            font: $h5-bold;
            margin-left: 4px;
        }
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
		padding: 20px 15px;
		position: relative;
	}
	.message{
		margin-top: 8px;
		&:first-of-type{
			margin-top: 0;
		}
	}

</style>
