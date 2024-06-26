<template>
	<div class="page">
		<div class="popup-container-bg" v-if="showChangePasswordPopup">
			<ChangePasswordPopup
				@close="() => (showChangePasswordPopup = false)" />
		</div>
		<div class="header-container">
			<HeadRegistered counter="22" />
		</div>
		<div class="page-content">
            <div class="content-container">
                <img src="@/assets/account/no-messages.png" alt="">
                <div class="title">You don`t have any messages</div>
                <div class="support">
                    <ButtonSmall text="Support"/>
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
	import ButtonSmall from "@/components/layout/buttons/ButtonSmall.vue";
	
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
        height: calc(100vh - 126px);
        width: 100vw;
        display: grid;
        place-content: center;
	}
    .content-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
	img{
        width: 180px;
    }
	.title{
        font: $h1;
        color: white;
        margin-top: 10px;
    }
    .support{
        width: 170px;
        margin-top: 16px;
    }
</style>
