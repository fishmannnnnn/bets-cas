<template>
	<div class="card-bg">
		<div class="card">
			<div class="card__top">
					<div class="data">
						<span class="trans-title">Trans ID</span>{{ data.id }}
					</div>
					<div class="data">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.6667 2.66797H3.33333C2.59695 2.66797 2 3.26492 2 4.0013V13.3346C2 14.071 2.59695 14.668 3.33333 14.668H12.6667C13.403 14.668 14 14.071 14 13.3346V4.0013C14 3.26492 13.403 2.66797 12.6667 2.66797Z"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M10.666 1.33203V3.9987"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M5.33398 1.33203V3.9987"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M2 6.66797H14"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<div class="data__date">
							{{ data.date }}
						</div>
						<div class="data__time">
							{{ data.time }}
						</div>
					</div>
				
			</div>
			<div class="content">
				<div class="info">
					<div class="type">
						<span class="info-title">Type:</span> {{ data.type }}
					</div>
					<div class="total-odds">
						<span class="info-title">Amount:</span>
						{{ data.amount }}
					</div>
					<div class="stake">
						<span class="info-title">Payment System:</span>
						{{ data.paymentSystem }}
					</div>
					<div
						class="bonus">
						<span class="info-title">Bonus:</span>
						{{ data.bonus }}
					</div>
				</div>
				<div class="description">
					<span class="info-title">Description:</span
					><span
						class="description-text"
						>{{ data.description }}</span
					>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		data: Object,
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/global";
	.card-bg {
		border-radius: 4px;
		width: 100%;
		padding: 1px;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
	}
	.card {
		border-radius: 3px;
		background: $bg-gray;
	}
	.card__top {
		padding: 8px 7px 10px;
        display: flex;
        gap: 8px;
        font: $h6-medium;
        flex-wrap: wrap;
	}
	.trans-title {
		font: $h6-medium;
		color: $gray-text;
		margin-right: 2px;
	}
	.data {
		background: $bg-black;
		padding: 4px 6px;
		width: fit-content;
		border-radius: 2px;
		display: flex;
		align-items: center;
	}
	.data__date {
		margin-left: 2px;
	}
	.data__time {
		margin-left: 4px;
	}
	.content {
		padding: 0 10px 18px;
	}
	.info {
		padding: 0 2px 10px;
        display: flex;
        flex-direction: column;
		gap: 8px;
		font: $h5-regular;
	}
	.info-title {
		font: $h5-regular;
		margin-right: 6px;
		color: $gray-text;
	}
	.description{
        border-top: 1px solid $separator;
        padding: 8px 2px 0;
        font: $h5-regular;
    }
</style>
