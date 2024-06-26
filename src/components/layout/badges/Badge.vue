<script setup>
	const props = defineProps({
		count: {
			type: String,
			required: true,
		},
		className: {
			type: String,
		},
	});
</script>
<template>
	<div
		class="badge-bg"
		:class="
			(className,
			{
				'badge-single': count.length == 1,
				'badge-double': count.length == 2,
				'badge-triple': count.length == 3,
			})
		">
        <div class="badge">
            {{ count }}
        </div>
	</div>
</template>
<style lang="scss" scoped>
	@import "@/styles/global";
	.badge-bg {
        color: white;
		font: $h8;
		padding: 1px;
		border-radius: 200px;
		background: linear-gradient(180deg, #ff596b 0%, #f14759 100%);
	}
    .badge-single{
        width: 16px;
		height: 16px;
    }
    .badge-double{
        width: 20px;
		height: 16px;
    }
    .badge-triple{
        width: 26px;
		height: 16px;
    }
	.badge {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 200px;
		height: 100%;
		width: 100%;
		background: linear-gradient(180deg, #b72837 0%, #fd5869 100%);
	}
	// .badge-single{
	//     width: 16px;
	//     height: 16px;
	//     background: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="url(%23paint0_linear_4931_16623)"/><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="url(%23paint1_linear_4931_16623)"/><defs><linearGradient id="paint0_linear_4931_16623" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23B72837"/><stop offset="1" stop-color="%23FD5869"/></linearGradient><linearGradient id="paint1_linear_4931_16623" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF596B"/><stop offset="1" stop-color="%23F14759" stop-opacity="0"/></linearGradient></defs></svg>');
	// }
	// .badge-double{
	//     width: 20px;
	//     height: 16px;
	//     background: url('data:image/svg+xml,<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="19" height="15" rx="7.5" fill="url(%23a)"/><rect x=".5" y=".5" width="19" height="15" rx="7.5" stroke="url(%23b)"/><defs><linearGradient id="a" x1="10" y1="0" x2="10" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23B72837"/><stop offset="1" stop-color="%23FD5869"/></linearGradient><linearGradient id="b" x1="10" y1="0" x2="10" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF596B"/><stop offset="1" stop-color="%23F14759" stop-opacity="0"/></linearGradient></defs></svg>');
	// }
	// .badge-triple{
	//     width: 26px;
	//     height: 16px;
	//     background: url('data:image/svg+xml,<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="25" height="15" rx="7.5" fill="url(%23a)"/><rect x=".5" y=".5" width="25" height="15" rx="7.5" stroke="url(%23b)"/><defs><linearGradient id="a" x1="13" y1="0" x2="13" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23B72837"/><stop offset="1" stop-color="%23FD5869"/></linearGradient><linearGradient id="b" x1="13" y1="0" x2="13" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF596B"/><stop offset="1" stop-color="%23F14759" stop-opacity="0"/></linearGradient></defs></svg>');
	// }
</style>
