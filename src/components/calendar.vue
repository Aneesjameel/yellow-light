<template>
    <div class=" flex w-1/2">
        <div class="mb-2 flex gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2 w-20">출발일</label>
      <Calendar
        v-model="dates"
        selection-mode="range"
        date-format="yy-mm-dd"
        show-icon
        :show-button-bar="true"
        class="w-full"
        placeholder="Select Date Range"
      />
      </div>
      <!-- Display Selected Date Range -->
      <div v-if="dates && dates.length > 0" class="">
        <p><strong>Start Date:</strong> {{ dates[0] ? dates[0].toLocaleDateString() : '' }}</p>
        <p><strong>End Date:</strong> {{ dates[1] ? dates[1].toLocaleDateString() : '' }}</p>
      </div>
   <!-- Search Bar -->
   
    </div>
    <div class="flex items-center space-x-4 mb-5">
        <input type="date" class="p-2 border border-gray-300 rounded">
        <span>~</span>
        <input type="date" class="p-2 border border-gray-300 rounded">
        <button class="bg-red-500 text-white px-4 py-2 rounded">조회</button>
      </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Calendar from "primevue/calendar";
  
  export default {
    components: {
      Calendar
    },
    setup() {
      const dates = ref(null); // Store selected date range here
  
      const applyDates = () => {
        if (dates.value && dates.value.length === 2) {
          console.log("Selected Start Date:", dates.value[0]);
          console.log("Selected End Date:", dates.value[1]);
        } else {
          console.log("Please select both start and end dates.");
        }
      };
  
      return { dates, applyDates };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  