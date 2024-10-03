<template>
    <!-- Only show modal if `isVisible` is true -->
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-2xl shadow-lg p-10 w-96 text-sm">
        <!-- Review content -->
        <h1 class="text-xl font-bold mb-4">리뷰</h1>
        <div class="hover:scrollbar-thumb-sky-500 active:scrollbar-thumb-sky-400 h-1/2 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-auto">
    
        <div class="mb-6 gap-4 flex flex-col">
          <p class="text-gray-700">
            아직 너무 좋았어요. 출발할때 잠깐 비행기가 흔들려서 좀 걱정됐는데
            빠르고 나아지는 다 만족입니다. 친구들이 너무 좋아해서요 다음번엔
            가족이랑 오고싶어요. 인솔자 분도 너무 친절하시고, 요청사항 잘
            들어주시고 너무 고생많으셨습니다 덕분에 좋은 추억 만들어갑니다.
          </p>
          <p class="text-gray-500 mt-2">yes2323@naver.com</p>
          <p class="text-gray-400 text-sm">작성일 2024년 3월 9일</p>
        </div>
  
        <hr class="my-4">
  
        <div class="mb-6  gap-4 flex flex-col">
          <p class="text-gray-700">
            아직 너무 좋았어요. 출발할때 잠깐 비행기가 흔들려서 좀 걱정됐는데
            빠르고 나아지는 다 만족입니다. 친구들이 너무 좋아해서요 다음번엔
            가족이랑 오고싶어요. 인솔자 분도 너무 친절하시고, 요청사항 잘
            들어주시고 너무 고생많으셨습니다 덕분에 좋은 추억 만들어갑니다.
          </p>
          <p class="text-gray-500 mt-2">yes2323@naver.com</p>
          <p class="text-gray-400 text-sm">작성일 2024년 3월 9일</p>
        </div>
    </div>
        <!-- Close button -->
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
  /* Add custom styles here if needed */
  </style>
  