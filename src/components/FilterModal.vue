<template>
    <!-- Only show modal if `isVisible` is true -->
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div class="bg-gray-800 p-6 rounded-lg text-white max-w-xs w-full">
        <!-- Modal content as per provided HTML -->
  
        <label for="color-filter" class="block mb-2">색상 기준:</label>
        <select id="color-filter" class="block w-full p-2 mb-4 bg-gray-700 rounded-lg border-none">
          <option value="none">없음</option>
        </select>
  
        <label for="category-select" class="block mb-2">항목 선택:</label>
        <select id="category-select" class="block w-full p-2 mb-4 bg-gray-700 rounded-lg border-none">
          <option value="all">(모두 선택)</option>
        </select>
  
        <input type="text" id="search-box" placeholder="검색" class="block w-full p-2 mb-4 bg-gray-700 rounded-lg border-none text-white placeholder-gray-400">
  
        <div class="space-y-2">
          <label class="flex items-center">
            <input type="checkbox" checked class="form-checkbox text-green-500 h-4 w-4 mr-2">
            (모두 선택)
          </label>
          <label class="flex items-center">
            <input type="checkbox" checked class="form-checkbox text-green-500 h-4 w-4 mr-2">
            라부안바조 & 발리 유봇 / 7박
          </label>
          <label class="flex items-center">
            <input type="checkbox" checked class="form-checkbox text-green-500 h-4 w-4 mr-2">
            리얼야생버라이어티 호주
          </label>
          <label class="flex items-center">
            <input type="checkbox" checked class="form-checkbox text-green-500 h-4 w-4 mr-2">
            일본 소도시 미식여행 / 3박
          </label>
        </div>
  
        <!-- Close button -->
        <div class="mt-6 text-center">
          <button @click="closeModal" class="bg-gray-200 px-4 py-2 rounded-lg text-black">닫기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      isVisible() {
        return this.modelValue;
      }
    },
    methods: {
      closeModal() {
        this.$emit('update:modelValue', false);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  