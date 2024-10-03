<template>
  <div class="mx-auto p-4">
    <!-- Calendar Header -->
    <div class="flex justify-between items-center mb-4">
      <button @click="prevMonth" class="text-blue-600 text-2xl">&lt;</button>
      <h1 class="text-xl font-bold">
        {{ currentYear }}년 {{ currentMonth + 1 }}월
      </h1>
      <button @click="nextMonth" class="text-blue-600 text-2xl">&gt;</button>
    </div>

    <!-- Calendar Grid -->
    <div class="grid grid-cols-7 gap-2">
      <!-- Weekday Headers -->
      <div v-for="(day, index) in weekdays" :key="index" class="text-center font-bold">
        {{ day }}
      </div>

      <!-- Empty Days for Padding (if the month doesn't start on Sunday) -->
      <div v-for="empty in paddingDays" :key="empty"></div>

      <!-- Days of the Month -->
      <div
        v-for="(day, index) in daysInMonth"
        :key="index"
        class="text-center p-2 border border-greyTone relative"
        :class="isDepartureDay(day) ? 'bg-blue-500  font-bold' : ''"
      >
        <span>{{ day }}</span>
        <div v-if="isDepartureDay(day)" class="absolute top-0 right-0 text-sm p-1 bg-blue text-white w-full h-full">출발일</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      departureDays: [12, 15, 28], // Example departure days for the current month
      weekdays: ['일', '월', '화', '수', '목', '금', '토'], // Sunday to Saturday
    };
  },
  computed: {
    daysInMonth() {
      const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      return Array.from({ length: days }, (_, i) => i + 1);
    },
    paddingDays() {
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
      return Array.from({ length: firstDayOfMonth });
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      } else {
        this.currentMonth += 1;
      }
    },
    isDepartureDay(day) {
      return this.departureDays.includes(day);
    },
  },
};
</script>

<style scoped>
/* Additional styling for better spacing */
.grid {
  gap: 1rem;
}
</style>
