<template>
  <div class="p-8 bg-gray-50">
    <!-- Header -->
    <div class="border-b border-gray-300 pb-4 mb-8">
      <h2 class="text-xl font-bold">포함/불포함사항</h2>
    </div>

    <!-- Included and Excluded Sections -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <!-- Included -->
      <div>
        <h3 class="text-lg font-semibold mb-4">포함사항</h3>
        <ul class="text-gray-700 space-y-2">
          <li>[왕복항공권] 인천 ↔ 홍콩 [왕복 직항]</li>
          <li>[유류할증료] 발권일 및 환율에 따라 변동될 수 있음</li>
          <li>[제세공과금] 유가와 환율에 따라 수시 변동될 수 있음</li>
          <li>[숙소] 리갈리버사이드 또는 동급 (2인1실)</li>
          <li>[식사] 특식 - DIM SUM/광동식/한식 또는 현지식</li>
          <li>[관광지 입장료] 일정상의 관광지 입장료</li>
          <li>[여행자보험] KB해외여행자 보험 최대 1억원 보장 (만 1세미만, 85세 이상 제외)</li>
          <li>[전용차량] 일정표 상 차량</li>
          <li>[혜택] 자유일정 포함 및 데이투어 선택 관광</li>
        </ul>
      </div>

      <!-- Excluded -->
      <div>
        <h3 class="text-lg font-semibold mb-4">불포함사항</h3>
        <ul class="text-gray-700 space-y-2">
          <li>[가이드/기사경비] 2박 USD30/1인, 3박 USD40/1인 (성인/소아 동일 현지 지불)</li>
          <li>[싱글룸 사용료] 문의요망</li>
          <li>[기타 개인경비 및 매너팁] 매너팁은 소비자의 자율적 선택사항으로 지불여부에 따른 불이익은 없습니다.</li>
          <li>[선택관광비용] 나이트투어 및 마카오 데이투어</li>
          <li>[성수기 서차지] 기간별 상이, 유선안내 예정</li>
        </ul>
      </div>
    </div>

    <!-- Buttons Section -->
    <div class="flex justify-between mt-8">
      <!-- Reservation Button -->
      <button class="w-1/2 bg-blue text-white py-6 rounded-2xl text-lg font-semibold mr-2 ">
        예약하러 가기
      </button>
      <!-- List Button -->
      <button class="w-1/2 bg-lGrey text-white py-6 rounded-2xl text-lg font-semibold ml-2 ">
        목록으로
      </button>
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
