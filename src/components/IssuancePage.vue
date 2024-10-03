<script setup>
import slider from './issuance/slider.vue'
import arrow from '../components/arrow.vue'
import calendar from './issuance/calendar.vue'
import day1 from './issuance/day1.vue'
import day2 from './issuance/day2.vue'
import day3 from './issuance/day3.vue'
import paragraph from './issuance/paragraph.vue'
import PriceCalculator from './issuance/PriceCalculator.vue'

</script>
<template>
  <div class="container mx-auto my-10">
      <!-- Slide items -->
      <h2 class="text-center text-1xl text-opacity-40">상세보기</h2>
      <h1 class="text-center text-bold font-bold text-3xl mb-4">앵커리지 6박 7일 패키지여행</h1>
      <div class="flex flex-col md:flex-row ">
    <!-- 60% width on medium screens and up, full width on small screens -->
    <div class="w-full md:w-3/5 bg-blue-500 p-4">
      <slider/>
    </div>
    
    <!-- 40% width on medium screens and up, full width on small screens -->
    <div class="w-full md:w-2/5  p-4">
      <div class="max-w-md mx-auto p-4">
    <!-- Title Section -->
    <h1 class="text-xl font-semibold mb-4">앵커리지 6박 7일 패키지여행</h1>

    <!-- Travel Area Section -->
    <div class="mb-2 flex">
      <p class="font-bold pr-3">여행지역</p>
      <p>앵커리지 - 팔머 - 발데즈 - 마타누스카 - 와실라 - 타키트나 - 스워드 - 거드우드</p>
    </div>

    <!-- Minimum Departure Section -->
    <div class="mb-4 flex border-t border-b border-greyTone py-3">
      <p class="font-bold pr-3">최소출발</p>
      <p>8명</p>
    </div>

    <!-- Price Section -->
    <div>
      <p class="font-bold mb-2">비용</p>

      <!-- Adult Price -->
      <div class=" justify-between items-center mb-2 ">
        <div class="text-greyTone1">성인 1인</div>
        <div class="font-bold text-xl">559,000원~</div>
      </div>

      <!-- Child Price -->
      <div class=" justify-between items-center mb-2 ">
        <div class="text-greyTone1">아동 1인</div>
        <div class="font-bold text-xl">459,000원~</div>
      </div>

      <!-- Infant Price -->
      <div class=" justify-between items-center ">
        <div class="text-greyTone1">유아 1인</div>
        <div class="font-bold text-xl">35,000원~</div>
      </div>
    </div>
  </div>
    </div>
  </div>
  
  <div class="flex flex-col md:flex-row  border-t border-greyTone">
    <div class="w-full md:w-2/4 bg-blue-500 p-4">
      <calendar/>
    </div>
    <div class="w-full md:w-2/4  p-4">
      <PriceCalculator/>
    </div>
    </div>

 

  <day1/>
  <day2/>
  <day3/>
  <paragraph/>
  <arrow/>
</div>
</template>
<style scoped>
</style>