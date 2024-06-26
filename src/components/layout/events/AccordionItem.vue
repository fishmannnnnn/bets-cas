<template>
	<div class="accordion-content" v-for="(item, _index) in dataLive">
		<div
			class="accordion-item"
			@click="setActiveAccordionItem($event)"
			:id="item.id">
			<div class="container-left">
				<img
					class="accordion-item__img"
					:src="getImageUrl(item.imgName)"
					alt="" />
				<div class="accordion-item__league">
					{{ item.league }}
				</div>
			</div>
			<svg
				:class="[
					activeAccordionItem === item.id
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
			v-if="activeAccordionItem === item.id">
			<slot></slot>
			<!-- <SportCategoryTableLive :data="item.tableData[0]" />
			<SportCategoryTableLive :data="item.tableData[1]" />
			<SportCategoryTableLive :data="item.tableData[2]" /> -->
		</div>
	</div>
</template>

<script setup>
const activeAccordionItem = ref(true);
	const setActiveAccordionItem = () => {
		if (activeAccordionItem.value == true) {
			activeAccordionItem.value = false;
			return;
		}

		activeAccordionItem.value = event.currentTarget.id;
	};
</script>

<style lang="scss" scoped></style>
