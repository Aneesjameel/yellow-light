<template>
    <!-- Only show modal if `isVisible` is true -->
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-2xl shadow-lg p-10 w-80 text-sm">
        <h2 class="text-xl font-semibold text-center mb-4">상품 노출관리</h2>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <a href="#" class="text-blue-500 underline">수정</a>
            <span>추천여행</span>
            <button class="text-white px-4 py-2 rounded-lg bg-[#ff9800]">노출하기</button>
          </div>
  
          <div class="flex items-center justify-between">
            <a href="#" class="text-blue-500 underline">수정</a>
            <span>봄 여행</span>
            <button class="text-white px-4 py-2 rounded-lg bg-[#6b7280]">삭제하기</button>
          </div>
  
          <div class="flex items-center justify-between">
            <a href="#" class="text-blue-500 underline">수정</a>
            <span>여름 여행</span>
            <button class="text-white px-4 py-2 rounded-lg bg-[#ff9800]">노출하기</button>
          </div>
  
          <div class="flex items-center justify-between">
            <a href="#" class="text-blue-500 underline">수정</a>
            <span>가을 여행</span>
            <button class="text-white px-4 py-2 rounded-lg bg-[#ff9800]">노출하기</button>
          </div>
  
          <div class="flex items-center justify-between">
            <a href="#" class="text-blue-500 underline">수정</a>
            <span>겨울 여행</span>
            <button class="text-white px-4 py-2 rounded-lg bg-[#ff9800]">노출하기</button>
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
      // Prop for two-way binding of visibility (v-model)
      modelValue: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      // Sync `modelValue` with `isVisible`
      isVisible() {
        return this.modelValue;
      }
    },
    methods: {
      closeModal() {
        // Emit event to update the parent component's visibility state
        this.$emit('update:modelValue', false);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add additional modal styling if needed */
  </style>
  