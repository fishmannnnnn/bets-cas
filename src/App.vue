<script setup>
	import "@/styles/reset.css";
	import "@/styles/style.scss";
	import { provide, ref } from "vue";

	const isOpened = ref(false);
	const onClick = () => {
		isOpened.value = !isOpened.value;
	};
	provide("menuState", { isOpened, onClick });

	const selectedLanguage = ref("GB");
	provide("selectedLanguage", {
		selectedLanguage,
	});
</script>

<template>
	<RouterView />
</template>

<style lang="scss" scoped></style>
