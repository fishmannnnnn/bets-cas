<template>
	<div class="datepicker">
		<div class="input-title">Select period</div>
		<input
			class="date__input input-placeholder-top"
			type="text"
			v-model="formattedDate"
			@focus="showCalendar = true"
			readonly />
		<svg
			class="date__svg"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
				stroke="#5E6471"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M13.3335 1.66797V5.0013"
				stroke="#5E6471"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.6665 1.66797V5.0013"
				stroke="#5E6471"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M2.5 8.33203H17.5"
				stroke="#5E6471"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</svg>
		<div v-if="showCalendar" class="calendar" ref="calendarRef">
			<div class="calendar-header">
				<button @click="prevMonth">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)">
						<path
							d="M1 1L5 5L9 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</button>
				<span class="month-title">{{ months[currentMonth] }}</span>
				<button @click="nextMonth">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)">
						<path
							d="M1 1L5 5L9 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</button>
				<button @click="prevYear">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)">
						<path
							d="M1 1L5 5L9 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</button>
				<span>{{ currentYear }}</span>
				<button @click="nextYear">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)">
						<path
							d="M1 1L5 5L9 1"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"></path>
					</svg>
				</button>
			</div>
			<div class="calendar-body">
				<div class="day" v-for="day in days" :key="day">
					{{ day.substring(0, 2) }}
				</div>
				<div
					class="date"
					v-for="date in calendarDates"
					:key="date.getTime()"
					:class="{
						today: isToday(date),
						selected: isSelected(date),
						'in-range': inRange(date),
						'outside-month': isOutsideMonth(date),
					}"
					@click="selectDate(date)">
					{{ date.getDate() }}
                    <div class="today-dot" v-if="isToday(date)"></div>
				</div>
			</div>
			<button class="ok" @click="showCalendar = false">OK</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, watch } from 'vue';
	import { onClickOutside } from '@vueuse/core';

	defineProps({ modelValue: String });
	const emit = defineEmits(['update:modelValue']);
	// Current date
	const currentDate = ref(new Date());
	const startDate = ref(null);
	const endDate = ref(null);
	const showCalendar = ref(false);
	const calendarRef = ref(null);
	// Getters for month, year
	const currentMonth = ref(currentDate.value.getMonth());
	const currentYear = ref(currentDate.value.getFullYear());

	// Month names
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// Days of the week
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	// Computed property for formatted date
	const formattedDate = computed(() => {
		if (!startDate.value) return '';
		if (!endDate.value) return startDate.value.toLocaleDateString('en-GB');
		return `${startDate.value.toLocaleDateString('en-GB')} - ${endDate.value.toLocaleDateString('en-GB')}`;
	});
	watch(formattedDate, () => emit('update:modelValue', formattedDate));
	// Get the first day of the month
	const getFirstDayOfMonth = (year, month) => {
		return new Date(year, month, 1).getDay();
	};

	// Get the number of days in the month
	const getDaysInMonth = (year, month) => {
		return new Date(year, month + 1, 0).getDate();
	};

	// Computed property for calendar dates
	const calendarDates = computed(() => {
		const dates = [];
		const firstDay = getFirstDayOfMonth(
			currentYear.value,
			currentMonth.value
		);
		const daysInMonth = getDaysInMonth(
			currentYear.value,
			currentMonth.value
		);

		// Fill in the previous month's dates
		for (let i = firstDay; i > 0; i--) {
			dates.push(new Date(currentYear.value, currentMonth.value, -i + 1));
		}

		// Fill in the current month's dates
		for (let i = 1; i <= daysInMonth; i++) {
			dates.push(new Date(currentYear.value, currentMonth.value, i));
		}

		// Fill in the next month's dates to complete the calendar grid
		const remainingSlots = 42 - dates.length; // 6 weeks * 7 days = 42 slots
		for (let i = 1; i <= remainingSlots; i++) {
			dates.push(new Date(currentYear.value, currentMonth.value + 1, i));
		}

		return dates;
	});

	// Select date
	const selectDate = (date) => {
		if (!startDate.value || (startDate.value && endDate.value)) {
			startDate.value = date;
			endDate.value = null;
		} else if (date < startDate.value) {
			startDate.value = date;
		} else {
			endDate.value = date;
			// showCalendar.value = false;
		}
	};

	// Check if the date is today
	const isToday = (date) => {
		const today = new Date();
		return (
			date.getDate() === today.getDate() &&
			date.getMonth() === today.getMonth() &&
			date.getFullYear() === today.getFullYear()
		);
	};

	// Check if the date is selected
	const isSelected = (date) => {
		if (!startDate.value && !endDate.value) return false;
		if (startDate.value && !endDate.value)
			return date.getTime() === startDate.value.getTime();
		return (
			date.getTime() === startDate.value.getTime() ||
			date.getTime() === endDate.value.getTime()
		);
	};

	// Check if the date is in the range
	const inRange = (date) => {
		if (!startDate.value || !endDate.value) return false;
		return date > startDate.value && date < endDate.value;
	};

	// Check if the date is outside the current month
	const isOutsideMonth = (date) => {
		return date.getMonth() !== currentMonth.value;
	};

	// Move to the previous month
	const prevMonth = () => {
		if (currentMonth.value === 0) {
			currentMonth.value = 11;
			currentYear.value--;
		} else {
			currentMonth.value--;
		}
	};

	// Move to the next month
	const nextMonth = () => {
		if (currentMonth.value === 11) {
			currentMonth.value = 0;
			currentYear.value++;
		} else {
			currentMonth.value++;
		}
	};

	// Move to the previous year
	const prevYear = () => {
		currentYear.value--;
	};

	// Move to the next year
	const nextYear = () => {
		currentYear.value++;
	};

	onClickOutside(calendarRef, () => {
		showCalendar.value = false;
	});
</script>

<style lang="scss" scoped>
	@import '@/styles/global.scss';
	.datepicker {
		position: relative;
	}
	.date__svg {
		position: absolute;
		top: 13px;
		right: 16px;
	}
	.input-placeholder-top {
		padding: 12.5px 8px 0;
		font: $h4-medium;
		height: 46px;
		width: 100%;
		background: $bg-gray;
		border: none;
		border-radius: 4px;
		color: white;
		&::placeholder {
			color: $gray-text;
		}
	}
	.date__input {
		font: $h4-medium;
	}
	.input-title {
		position: absolute;
		top: 5.5px;
		left: 8px;
		font: $h7-regular;
		color: $gray-text;
	}
	input {
		width: 200px;
		padding: 8px;
		font-size: 16px;
	}
	button {
		background: none;
		border: none;
	}
	.calendar {
		position: absolute;
		top: 40px;
		left: 0;
		background: $bg-gray;
		border: 1px solid #585858;
		padding: 15px;
		border-radius: 4px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
	.calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		font: normal 400 14px/120% $second-family;
	}
	.month-title {
		width: 100px;
		text-align: center;
	}
	.calendar-body {
		padding-top: 20px;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2px 0;
		color: white;
	}
	.day {
		color: $gray-text;
		font: normal 400 11px/120% $second-family;
	}
	.day,
	.date {
		text-align: center;
	}
	.date {
		cursor: pointer;
		width: 32px;
		height: 32px;
		display: grid;
		place-content: center;
		font: normal 400 11px/120% $second-family;
	}
	.today {
		// background-color: #ffffff7e;
		position: relative;
	}
    .today-dot{
        position: absolute;
			height: 4px;
			width: 4px;
			border-radius: 200px;
			content: '';
			left: 50%;
			transform: translateX(-50%);
			bottom: 4px;
			background: #ffffff7e;
    }
	.date.selected {
		background-color: #f0ac2f;
		color: black;
		border-radius: 200px;
		position: relative;
		z-index: 5;
	}
	.date.in-range {
		color: black;
		background-color: #d3841e62;
		position: relative;
	}
	:nth-child(1 of .date.in-range){
		position: relative;
		box-shadow: -18px 0 #d3841e62;
	}
	:nth-last-child(1 of .date.in-range){
		position: relative;
		box-shadow: 18px 0 #d3841e62;
	}
	.date.outside-month {
		color: #ccc;
		visibility: hidden;
	}
	.ok {
		color: #ee9c31;
		font: normal 600 14px/120% $second-family;
		float: right;
	}
</style>
