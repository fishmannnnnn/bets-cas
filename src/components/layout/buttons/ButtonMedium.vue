<script setup>
	const props = defineProps({
		type: {
			type: String,
			default: "primary",
		},
		className: {
			type: String,
		},
		text: {
			type: String,
		},
	});
</script>
<template>
	<div :class="['btn', `btn_${type}`, className]">
		<div :class="['button-bg', `button-bg_${type}`]">
			<div class="rect-border">
				<div :class="['bg__rect', `bg__rect-${type}`]"></div>
			</div>
			<div :class="['bg__right', `bg__right-${type}`]"></div>
		</div>
		<div class="container">
			<span v-if="text">{{ text }}</span>
			<span v-else-if="type === 'primary' || type === 'primary-disabled'"
				>Registration</span
			>
			<span v-else>Login</span>
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "@/styles/global";
	.btn {
		color: $bg-black;
		position: relative;
		width: 100%;
		height: 45px;
		border: none;
		font: $h5-medium;
		&_primary {
			&-disabled {
				opacity: 0.5;
			}
		}
		&_secondary {
			color: $gold-accent;
			&-disabled {
				color: $gold-accent;
				opacity: 0.5;
			}
		}
	}
	.button-bg {
		position: relative;
		&_primary {
			filter: drop-shadow(0 0 3px rgba(255, 163, 79, 0.71))
				drop-shadow(0 0 2px rgba(0, 0, 0, 0.59));
			&-disabled {
				filter: drop-shadow(0 0 3px rgba(255, 163, 79, 0.71))
					drop-shadow(0 0 2px rgba(0, 0, 0, 0.59));
			}
		}
		&_secondary {
			color: $gold-accent;
			filter: drop-shadow(0 0 3px rgba(255, 163, 79, 0.71))
				drop-shadow(0 0 2px rgba(0, 0, 0, 0.59));
			&-disabled {
				color: $gold-accent;
				filter: drop-shadow(0 0 3px rgba(255, 163, 79, 0.71))
					drop-shadow(0 0 2px rgba(0, 0, 0, 0.59));
			}
		}
	}
	.rect-border {
		width: calc(100% - 19px);
		padding: 1px;
		padding-right: 0;
		border-radius: 8px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		height: 44px;
		background: linear-gradient(
			180deg,
			rgba(255, 219, 88, 1),
			rgba(237, 186, 2, 1) 100%
		);
	}
	.bg__rect {
		width: 100%;
		height: 42px;

		border-radius: 8px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		&-primary {
			background: linear-gradient(
				0deg,
				rgba(229, 142, 11, 1) 0%,
				rgba(255, 206, 80, 1) 100%
			);
			&-disabled {
				background: linear-gradient(
					0deg,
					rgba(229, 142, 11, 1) 0%,
					rgba(255, 206, 80, 1) 100%
				);
			}
		}
		&-secondary {
			background: $bg-black;
			&-disabled {
				background: $bg-black;
			}
		}
	}
	.bg__right {
		position: absolute;
		width: 20px;
		height: 45px;
		top: 0;
		right: 0;
		&-primary {
			background: url('data:image/svg+xml,<svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-318 0.5H11C15.1421 0.5 18.5 3.85786 18.5 8V25.1863C18.5 27.1754 17.7098 29.0831 16.3033 30.4896L5.48959 41.3033C4.08307 42.7098 2.17542 43.5 0.186279 43.5H-318C-322.142 43.5 -325.5 40.1421 -325.5 36V8C-325.5 3.85786 -322.142 0.5 -318 0.5Z" fill="url(%23paint0_linear_17_21)" stroke="url(%23paint1_linear_17_21)" /><path d="M19 43V37.4142C19 36.5233 17.9229 36.0771 17.2929 36.7071L11.7071 42.2929C11.0771 42.9229 11.5233 44 12.4142 44H18C18.5523 44 19 43.5523 19 43Z" fill="%23E6900D" stroke="%23F0BF0E" /><defs><linearGradient id="paint0_linear_17_21" x1="-172.475" y1="39.875" x2="-172.475" y2="2.75" gradientUnits="userSpaceOnUse"><stop stop-color="%23E68E0B" /><stop offset="1" stop-color="%23FFCE50" /></linearGradient><linearGradient id="paint1_linear_17_21" x1="-153.5" y1="0" x2="-153.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
			&-disabled {
				background: url('data:image/svg+xml,<svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-318 0.5H11C15.1421 0.5 18.5 3.85786 18.5 8V25.1863C18.5 27.1754 17.7098 29.0831 16.3033 30.4896L5.48959 41.3033C4.08307 42.7098 2.17542 43.5 0.186279 43.5H-318C-322.142 43.5 -325.5 40.1421 -325.5 36V8C-325.5 3.85786 -322.142 0.5 -318 0.5Z" fill="url(%23paint0_linear_17_21)" stroke="url(%23paint1_linear_17_21)" /><path d="M19 43V37.4142C19 36.5233 17.9229 36.0771 17.2929 36.7071L11.7071 42.2929C11.0771 42.9229 11.5233 44 12.4142 44H18C18.5523 44 19 43.5523 19 43Z" fill="%23E6900D" stroke="%23F0BF0E" /><defs><linearGradient id="paint0_linear_17_21" x1="-172.475" y1="39.875" x2="-172.475" y2="2.75" gradientUnits="userSpaceOnUse"><stop stop-color="%23E68E0B" /><stop offset="1" stop-color="%23FFCE50" /></linearGradient><linearGradient id="paint1_linear_17_21" x1="-153.5" y1="0" x2="-153.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
			}
		}
		&-secondary {
			background: url('data:image/svg+xml,<svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_24_15" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="45"><rect width="20" height="45" fill="%23513D3D" /></mask><g mask="url(%23mask0_24_15)"><path d="M-318 0.5H11C15.1421 0.5 18.5 3.85786 18.5 8V25.1863C18.5 27.1754 17.7098 29.0831 16.3033 30.4896L5.48959 41.3033C4.08307 42.7098 2.17542 43.5 0.186279 43.5H-318C-322.142 43.5 -325.5 40.1421 -325.5 36V8C-325.5 3.85786 -322.142 0.5 -318 0.5Z" fill="%23080E13" stroke="url(%23paint0_linear_24_15)" /><path d="M19 43V37.4142C19 36.5233 17.9229 36.0771 17.2929 36.7071L11.7071 42.2929C11.0771 42.9229 11.5233 44 12.4142 44H18C18.5523 44 19 43.5523 19 43Z" fill="%23080E13" stroke="%23F0BF0E" /></g><defs><linearGradient id="paint0_linear_24_15" x1="-153.5" y1="0" x2="-153.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
			&-disabled {
				background: url('data:image/svg+xml,<svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_24_15" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="45"><rect width="20" height="45" fill="%23513D3D" /></mask><g mask="url(%23mask0_24_15)"><path d="M-318 0.5H11C15.1421 0.5 18.5 3.85786 18.5 8V25.1863C18.5 27.1754 17.7098 29.0831 16.3033 30.4896L5.48959 41.3033C4.08307 42.7098 2.17542 43.5 0.186279 43.5H-318C-322.142 43.5 -325.5 40.1421 -325.5 36V8C-325.5 3.85786 -322.142 0.5 -318 0.5Z" fill="%23080E13" stroke="url(%23paint0_linear_24_15)" /><path d="M19 43V37.4142C19 36.5233 17.9229 36.0771 17.2929 36.7071L11.7071 42.2929C11.0771 42.9229 11.5233 44 12.4142 44H18C18.5523 44 19 43.5523 19 43Z" fill="%23080E13" stroke="%23F0BF0E" /></g><defs><linearGradient id="paint0_linear_24_15" x1="-153.5" y1="0" x2="-153.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
			}
		}
	}
	.container {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		padding: 14px 20px 14px 16px;
	}
</style>
