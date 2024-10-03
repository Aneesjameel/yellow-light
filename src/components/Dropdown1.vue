<!-- TransparentDropdown.vue -->
<template>
  <div class="mb-6">
    <!-- Label for Dropdown -->
    <label for="dropdown" class="block mb-2 text-sm font-medium text-gray-700">정렬 :</label>
    
    <!-- Dropdown Menu -->
    <select 
      id="dropdown" 
      v-model="selectedOption" 
      class="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <option disabled value="">Please select</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "", // Stores the selected option
      options: ["추천순", "최신순", "마감일 순"], // List of dropdown options
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
