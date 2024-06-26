<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    className: {
        type: String
    },
    text: {
        type: String
    }
})
</script>
<template>
    <button :class="['btn', `btn_${type}`, className]">
        <span v-if="text">{{ text }}</span>
        <span v-else>Registration</span>
    </button>
</template>

<style lang="scss" scoped>
@import "@/styles/global";
.btn{
    width: 101px;
    height: 33px;
    border: none;
    padding: 7px 7px 8px 11px;
    font: $h5-medium;
    &_primary{
        color: $bg-black;
        background: url('data:image/svg+xml,<svg width="101" height="33" viewBox="0 0 101 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H94C97.0376 0.5 99.5 2.96243 99.5 6V18.5961C99.5 20.0105 98.9551 21.3705 97.9785 22.3937L90.911 29.7976C89.8732 30.8849 88.4357 31.5 86.9326 31.5H6C2.96244 31.5 0.5 29.0376 0.5 26V6Z" fill="url(%23paint0_linear_2020_23097)" stroke="url(%23paint1_linear_2020_23097)" /><path d="M100 31V27.4142C100 26.5233 98.9229 26.0771 98.2929 26.7071L94.7071 30.2929C94.0771 30.9229 94.5233 32 95.4142 32H99C99.5523 32 100 31.5523 100 31Z" fill="%23E6900D" stroke="%23F0BF0E" /><defs><linearGradient id="paint0_linear_2020_23097" x1="44.5" y1="29" x2="44.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="%23E68E0B" /><stop offset="1" stop-color="%23FFCE50" /></linearGradient><linearGradient id="paint1_linear_2020_23097" x1="50" y1="0" x2="50" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
        filter: drop-shadow(0 0 3px rgba(255, 163, 79, 0.71)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.59));
        &-disabled{
            display: none;
        }
    }   
    &_secondary{
        color: $gold-accent;
        background: url('data:image/svg+xml,<svg width="101" height="33" viewBox="0 0 101 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.5H94C97.0376 0.5 99.5 2.96243 99.5 6V18.5961C99.5 20.0105 98.9551 21.3705 97.9785 22.3937L90.911 29.7976C89.8732 30.8849 88.4357 31.5 86.9326 31.5H6C2.96244 31.5 0.5 29.0376 0.5 26V6C0.5 2.96243 2.96243 0.5 6 0.5Z" fill="%23080E13" stroke="url(%23paint0_linear_2028_346)" /><path d="M100 31V27.4142C100 26.5233 98.9229 26.0771 98.2929 26.7071L94.7071 30.2929C94.0771 30.9229 94.5233 32 95.4142 32H99C99.5523 32 100 31.5523 100 31Z" fill="%23080E13" stroke="%23F0BF0E" /><defs><linearGradient id="paint0_linear_2028_346" x1="50" y1="0" x2="50" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFDB58" /><stop offset="1" stop-color="%23EDBA02" /></linearGradient></defs></svg>');
        filter: drop-shadow(0 0 3px rgba(255, 238, 87, 0.53)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.59));
        &-disabled{
            display: none;
        }
    }
}
</style>