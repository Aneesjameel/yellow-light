<template>
    <div class="bg-gray-50 p-6">
      <!-- Header Section -->
      <div class="mb-8">
        <h2 class="text-lg font-semibold">여행 상세 일정</h2>
        <h3 class="text-3xl font-bold text-blue">DAY1</h3>
        <div class="mt-4 text-gray-800">
          <p>- 북 아일랜드 도착 미팅</p>
          <p>- 아일랜드 시내관광</p>
          <ul class="list-disc list-inside text-greyTone1 mt-2 space-y-1">
            <li>세계최대 레이크후드 수상 경비행기장</li>
            <li>앵커리지 만이 한눈에 보이는 캡틴룩 공원</li>
            <li>세계 최대의 초콜릿 분수가 있는 Wild Berry 공장</li>
            <li>연어부화장</li>
          </ul>
        </div>
      </div>
  
      <!-- Image Grid -->
      <div class="grid md:grid-cols-4 gap-4 mb-8 grid-cols">
        <img src="/v1.png" alt="image 1" class="rounded-lg w-full h-48 object-cover">
        <img src="/v2.png" alt="image 2" class="rounded-lg w-full h-48 object-cover">
        <img src="/v3.png" alt="image 3" class="rounded-lg w-full h-48 object-cover">
        <img src="/v4.png" alt="image 4" class="rounded-lg w-full h-48 object-cover">
      </div>
  
      <!-- Information Table -->
      <div class=" pt-4 text-center text-gray-700">
        <div class="grid md:grid-cols-5 grid-cols gap-4 py-4 border-t border-greyTone  border-b">
          <div class="border-r border-greyTone">
            <div class="flex justify-between px-4 items-center">
            <p class="font-semibold  text-blue">숙소</p>
            <div>
            <p>알렉산드르 호텔 스위트룸</p>
            <p class="text-gray-500">Alexandre Hotel Suite</p>
          </div>
          </div>
           
          </div>
          <div class=" flex justify-between px-4 items-center">
            <p class="font-semibold text-blue">조식</p>
            <p>한식</p>
          </div>
         
          <div class="border-r border-greyTone ">
            <div class="flex justify-between px-4 items-center">
            <p class="font-semibold  text-blue">석식</p>
            <div>
            <p>스퀘어 레스토랑</p>
            <p class="text-gray-500">Square Restaurant</p>
          </div>
          </div>
           
          </div>
          <div class="flex justify-between px-4 items-center">
            <p class="font-semibold  text-blue">이동수단</p>
            <p>관광버스</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // No specific reactive data or methods needed in this component for now
  };
  </script>
  
  <style scoped>
  /* Scoped styles if needed */
  </style>
  