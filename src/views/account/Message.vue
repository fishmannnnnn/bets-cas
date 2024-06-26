<template>
	<div :class="[{'message-bg-unread': data.unread}, {'message-bg': !data.unread}]">
		<div class="green-gradient" v-if="data.unread"></div>
		<div class="message">
			<div class="message__data">
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
				<div class="data">
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.6673 12.25V11.0833C11.6673 10.4645 11.4215 9.871 10.9839 9.43342C10.5463 8.99583 9.95282 8.75 9.33398 8.75H4.66732C4.04848 8.75 3.45499 8.99583 3.0174 9.43342C2.57982 9.871 2.33398 10.4645 2.33398 11.0833V12.25"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round" />
						<path
							d="M7.0013 6.41667C8.28997 6.41667 9.33463 5.372 9.33463 4.08333C9.33463 2.79467 8.28997 1.75 7.0013 1.75C5.71264 1.75 4.66797 2.79467 4.66797 4.08333C4.66797 5.372 5.71264 6.41667 7.0013 6.41667Z"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
                    <div class="data__sender">{{ data.sender }}</div>
				</div>
			</div>
            <div class="message__text">{{ data.text }}</div>
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
	.message-bg-unread {
		position: relative;
		width: 100%;
		border-radius: 12px;
		background: linear-gradient(0deg, #2f323f 0%, rgba(37, 38, 43, 1) 86%);
		padding: 1px;
	}
	.message-bg {
		position: relative;
		width: 100%;
		border-radius: 12px;
		background: linear-gradient(0deg, #2f323f 0%, #5a5e75 100%);
		padding: 1px;
	}
	.green-gradient {
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 43%;
		background: linear-gradient(
			0deg,
			rgba(0, 252, 119, 1) 0%,
			rgba(0, 150, 71, 0) 100%
		);
		border-radius: 12px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.message {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		background: $bg-gray;
		border-radius: 11px;
		padding: 9px 11px 14px 9px;
		color: white;
	}
    .message__data{
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }
	.data {
		display: flex;
		align-items: center;
		font: $h6-medium;
		padding: 4px 6px;
		background: $separator;
		border-radius: 2px;
	}
	.data__date {
		margin-left: 2px;
	}
	.data__time {
		margin-left: 4px;
	}
    .data__sender{
        margin-left: 6px;
    }
    .message__text{
        margin-top: 10px;
        padding-left: 2px;
        font: normal 400 14px/140% "Noto Sans", sans-serif;
    }
</style>
