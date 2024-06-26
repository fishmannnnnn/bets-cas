<script setup>
	import { ref, inject } from "vue";
	const { selectedLanguage } = inject("selectedLanguage");
	import { onClickOutside } from "@vueuse/core";
	defineProps({
		title: String,
		itemsList: Array,
	});
	const emit = defineEmits(["close"]);
	const emitClose = () => {
		emit("close", false);
	};
	const selectorRef = ref(null);
	onClickOutside(selectorRef, emitClose);
	// const getImageUrl = (name) =>
	// 	new URL(`/src/assets/country-list/${name}.svg`, import.meta.url).href;
</script>
<template>
	<div class="selector" ref="selectorRef">
		<div class="selector__title-container">
			<h2 class="selector__title">{{ title }}</h2>
			<svg
				@click="emitClose"
				class="selector-close"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18 6L6 18"
					stroke="#5E6471"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round" />
				<path
					d="M6 6L18 18"
					stroke="#5E6471"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</div>
		<div class="selector__list">
			<label
				:class="[
					'radio-label',
					selectedLanguage === item.flag ? 'radio-label-checked' : '',
				]"
				v-for="item in itemsList"
				:key="item.flag">
				<input
					type="radio"
					:value="item.flag"
					v-model="selectedLanguage" />
				<!-- <img
					v-if="item.flag"
					class="radio-image"
					:src="getImageUrl(item.flag)" /> -->
					<div class="radio-title">{{ item.flag }}</div>
				<span
					:class="[
						'radio-title',
						selectedLanguage === item.flag
							? 'radio-title-active'
							: '',
					]"
					>{{ item.language }}</span
				>
			</label>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "@/styles/global";
	.selector {
		position: fixed;
		z-index: 100000;
		bottom: 0;
		left: 0;
		padding: 30px 14px 20px 16px;
		height: fit-content;
		width: 100vw;
		box-shadow: inset 0 2px 4px 0 rgba(255, 255, 255, 0.32);
		background: linear-gradient(180deg, #323336 0%, #080e13 14.5%);
		border-radius: 12px 12px 0 0;
		border-top: 1px solid $gold-accent;
		filter: drop-shadow(0 -4px 10px rgba(255, 215, 71, 0.42));
		color: white;
	}
	.selector__title-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.selector__title {
		font: normal 700 18px/120% "Inter", sans-serif;
	}
	.selector__list {
		margin: 30px 1px 0 1px;
	}
	.radio-image {
		width: 21px;
		height: 16px;
	}
	.radio-label {
		display: flex;
		gap: 8px;
		align-items: center;
		padding: 14px 0px 14px 6px;
		border-top: 1px solid $separator;
	}
	.radio-label:last-of-type {
		padding-bottom: 0;
	}
	.radio-label:nth-child(1) {
		padding-top: 0;
		border: none;
	}
	.radio-title {
		font: $h4-medium;
		position: relative;
	}
	.radio-title-active {
		color: $gold-accent;
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
