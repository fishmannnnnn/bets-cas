<template>
	<div class="page">
		<div class="header-container">
			<HeadRegistered counter="1" />
		</div>
		<div class="page-content">
			<div class="back">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.5 15L7.5 10L12.5 5"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<div class="back-title">Subject: Subject 2</div>
			</div>
			<div class="messages">
				<div class="message" v-for="(item, _i) in messageList">
					<Message :data="item" />
				</div>
			</div>
			<div class="send-message">
				<MessageInput
				text="Type here"
					:modelValue="message"
					@update:modelValue="message = $event" />
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
	import Message from "./Message.vue";
	import MessageInput from "./MessageInput.vue";
	import { ref } from "vue";

	const message = ref("");
	const messageList = [
		{
			sender: "Admin",
			date: "19.12.2023",
			time: "16:30",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			unread: true,
		},
		{
			sender: "User login",
			date: "19.12.2023",
			time: "16:30",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
		padding: 15px 15px 0;
		height: calc(100dvh - 55px - 71px);
	}
	.back {
		display: flex;
		gap: 2px;
		align-items: center;
	}
	.back-title {
		font: $h2;
		color: white;
	}
	.messages {
		margin-top: 12px;
	}
	.message {
		margin-top: 8px;
		&:first-of-type {
			margin-top: 0;
		}
	}
	.send-message {
		position: absolute;
		height: fit-content;
		bottom: 10px;
		left: 15px;
		right: 15px;
	}
</style>
