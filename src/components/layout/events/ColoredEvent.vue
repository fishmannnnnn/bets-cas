<template>
	<div class="event">
		<div :class="`event-bg__rect-border-${color}`">
			<div :class="`event-bg__rect-${color}`"></div>
		</div>
		<div :class="`event-bg__right-${color}`"></div>
		<div class="event__content">
			<div class="content-container">
				<slot></slot>
			</div>
		</div>
		<div :class="`shadow-${color}`"></div>
	</div>
</template>

<script setup>
	defineProps({ color: String });
</script>

<style lang="scss" scoped>
	@import '@/styles/global.scss';
	.event {
		height: 53px;
		position: relative;
		filter: drop-shadow(0px 4px 2px black);
		width: 100%;
	}

	.event-bg__rect-border-green {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(0deg, #8fd931 0%, #37580e 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-green {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(180deg, #90db31 0%, #2d4909 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-green {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_55_10" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_55_10)"/><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L5.77773 0.211156L5.77773 0.211156L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_55_10)" mask="url(%23path-1-inside-1_55_10)"/><rect y="1" width="1" height="51" fill="url(%23paint2_linear_55_10)"/><defs><linearGradient id="paint0_linear_55_10" x1="-154.5" y1="1" x2="-154.5" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="%2390DB31"/><stop offset="1" stop-color="%232D4909"/></linearGradient><linearGradient id="paint1_linear_55_10" x1="-119" y1="46" x2="-119" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="%238FD931"/><stop offset="1" stop-color="%2337580E"/></linearGradient><linearGradient id="paint2_linear_55_10" x1="0.5" y1="1" x2="0.5" y2="52" gradientUnits="userSpaceOnUse"><stop stop-color="%2390DB31"/><stop offset="1" stop-color="%232D4909"/></linearGradient></defs></svg>');
	}

	.event-bg__rect-border-blue {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(0deg, #24c1e5 0%, #0c3992 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-blue {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(180deg, #25c4e7 0%, #0a4d8b 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-blue {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_116_9" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_116_9)"/><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_116_9)" mask="url(%23path-1-inside-1_116_9)"/><rect x="0.5" y="1.5" width="1" height="50" stroke="url(%23paint2_linear_116_9)"/><defs><linearGradient id="paint0_linear_116_9" x1="10.7449" y1="1" x2="10.7449" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="%2325C4E7"/><stop offset="1" stop-color="%230A4D8B"/></linearGradient><linearGradient id="paint1_linear_116_9" x1="13.0087" y1="46" x2="13.0087" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="%2324C1E5"/><stop offset="1" stop-color="%230C3992"/></linearGradient><linearGradient id="paint2_linear_116_9" x1="1" y1="1" x2="1" y2="52" gradientUnits="userSpaceOnUse"><stop stop-color="%2325C4E7"/><stop offset="1" stop-color="%230A4D8B"/></linearGradient></defs></svg>');
	}

	.event-bg__rect-border-brown {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(158deg, #E7A94D 0%, #9A4E16 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-brown {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(0deg, #814012 0%, #E3992A 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-brown {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_119_4" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_119_4)" /><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_119_4)" mask="url(%23path-1-inside-1_119_4)" /><defs><linearGradient id="paint0_linear_119_4" x1="-70.0101" y1="53" x2="-69.8215" y2="0.579761" gradientUnits="userSpaceOnUse"><stop stop-color="%23814012" /><stop offset="1" stop-color="%23E3992A" /></linearGradient><linearGradient id="paint1_linear_119_4" x1="-38.587" y1="49.5344" x2="-43.949" y2="-14.2465" gradientUnits="userSpaceOnUse"><stop stop-color="%23E7A94D" /><stop offset="1" stop-color="%239A4E16" /></linearGradient></defs></svg>');
	}

	.event-bg__rect-border-red {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(0deg, #F97A71 0%, #6A211C 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-red {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(0deg, #621D18 0%, #FF695F 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-red {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_119_11" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_119_11)" /><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_119_11)" mask="url(%23path-1-inside-1_119_11)" /><defs><linearGradient id="paint0_linear_119_11" x1="-69.0261" y1="53" x2="-69.0258" y2="0.000940745" gradientUnits="userSpaceOnUse"><stop stop-color="%23621D18" /><stop offset="1" stop-color="%23FF695F" /></linearGradient><linearGradient id="paint1_linear_119_11" x1="18.1923" y1="45.3558" x2="-7.88005" y2="32.0895" gradientUnits="userSpaceOnUse"><stop stop-color="%23F97A71" /><stop offset="1" stop-color="%236A211C" /></linearGradient></defs></svg>');
	}

	.event-bg__rect-border-purple {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(0deg, #A250E6 0%, #381888 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-purple {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(0deg, #321782 0%, #962BEA 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-purple {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_121_2" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_121_2)" /><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_121_2)" mask="url(%23path-1-inside-1_121_2)" /><defs><linearGradient id="paint0_linear_121_2" x1="-69.6697" y1="53" x2="-69.5462" y2="0.37956" gradientUnits="userSpaceOnUse"><stop stop-color="%23321782" /><stop offset="1" stop-color="%23962BEA" /></linearGradient><linearGradient id="paint1_linear_121_2" x1="-119" y1="46" x2="-119" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="%23A250E6" /><stop offset="1" stop-color="%23381888" /></linearGradient></defs></svg>');
	}

	.event-bg__rect-border-gray {
		height: 53px;
		width: calc(100% - 20px);
		padding: 1px 0 1px 1px;
		background: linear-gradient(180deg, #FFDB58 0%, #EDBA02 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
		z-index: 20;
	}
	.event-bg__rect-gray {
		width: calc(100% + 3px);
		height: 51px;
		background: linear-gradient(180deg, #43474E 0%, #242528 100%);
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: none;
		box-shadow: inset 0px -1px 4px rgba(255, 255, 255, 0.1);
		-webkit-clip-path: inset(-2px 2px -2px -2px);
		clip-path: inset(-2px 2px -2px -2px);
	}
	.event-bg__right-gray {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		width: 22px;
		height: 53px;
		background: url('data:image/svg+xml,<svg width="22" height="53" viewBox="0 0 22 53" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_121_7" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M0 53H18C20.2091 53 22 51.2091 22 49V17.3342C22 16.1697 21.4925 15.063 20.6101 14.3031L5.1252 0.968925C4.39927 0.343816 3.47309 0 2.5151 0H0V53Z" fill="url(%23paint0_linear_121_7)" /><path d="M0 53H-1V54H0V53ZM20.6101 14.3031L21.2626 13.5454L21.2626 13.5454L20.6101 14.3031ZM5.1252 0.968925L4.47268 1.72669L4.47268 1.72669L5.1252 0.968925ZM0 0V-1H-1V0H0ZM18 52H0V54H18V52ZM21 49C21 50.6569 19.6569 52 18 52V54C20.7614 54 23 51.7614 23 49H21ZM21 17.3342V49H23V17.3342H21ZM19.9576 15.0609C20.6194 15.6308 21 16.4608 21 17.3342H23C23 15.8786 22.3657 14.4952 21.2626 13.5454L19.9576 15.0609ZM4.47268 1.72669L19.9576 15.0609L21.2626 13.5454L5.77773 0.211156L4.47268 1.72669ZM2.5151 1C3.23359 1 3.92823 1.25786 4.47268 1.72669L5.77773 0.211156C4.87031 -0.570232 3.71258 -1 2.5151 -1V1ZM0 1H2.5151V-1H0V1ZM1 53V0H-1V53H1Z" fill="url(%23paint1_linear_121_7)" mask="url(%23path-1-inside-1_121_7)" /><defs><linearGradient id="paint0_linear_121_7" x1="10.7449" y1="1" x2="10.7449" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="%2343474E" /><stop offset="1" stop-color="%23242528" /></linearGradient><linearGradient id="paint1_linear_121_7" x1="11" y1="0" x2="11" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
	}

	.event__content {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 30;
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		border-radius: 4px;
		font: $h2;
		color: white;
	}
	.content-container {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.shadow-green {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #8fd931;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
	.shadow-blue {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #24c1e5;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
	.shadow-red {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #d95c54;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
	.shadow-brown {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #e69824;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
	.shadow-purple {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #962BEA;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
	.shadow-gray {
		position: absolute;
		top: 0;
		left: 0;
		height: 53px;
		width: 100%;
		border-radius: 4px;
		z-index: 50;
		box-shadow: inset 0 -2px 2px 0 #F5AD22;
		-webkit-clip-path: inset(32px 0 0 0);
		clip-path: inset(32px 0 0 0);
	}
</style>
