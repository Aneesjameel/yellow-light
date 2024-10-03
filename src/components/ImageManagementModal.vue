<template>
    <!-- Modal wrapper that only shows when `isVisible` is true -->
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl">
        <h2 class="text-2xl font-bold mb-6 text-center">이미지 관리 (Image Management)</h2>
  
        <!-- Form Section -->
        <div class="mb-4 ">
          <div class="flex justify-between items-center mb-4">
            <span class="font-semibold">원본 이미지(376 * 276)</span>
            <img src="/ss.png" alt="Uploaded Image" class="w-20 h-20 rounded">
          </div>
          
          <input type="file" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none">
          <button class="mt-2 bg-primary text-white px-4 py-2 rounded-2xl hover:bg-green-600">저장 (Save)</button>
        </div>
  
        <!-- Image Thumbnails Section -->
        <div class="mt-4 ">
          <h3 class="font-semibold mb-2">상세 이미지 (Detail Image) (376 * 276)</h3>
          <div class=" flex justify-between flex-row flex-wrap overflow-auto h-36 gap-2">
            <!-- Thumbnail section -->
            <div v-for="n in 7" :key="n">
              <img src="/ss.png" alt="Thumbnail" class="w-24 h-auto rounded">
              <button class="mt-2 bg-primary text-white px-2 py-1 rounded-2xl text-sm">선택 (Select)</button>
            </div>
          </div>
        </div>
  
        <div class="mt-6 text-center">
          <button @click="closeModal" class="bg-white text-lg border-black border rounded-2xl px-4 py-2 rounded-lg">닫기</button>
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
  /* Add styles if needed */
  </style>
  